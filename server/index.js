const mysql = require('mysql2')
const express = require('express')
const falso = require('@ngneat/falso')

const app = express()
const port = 3000

const mysqlConfig = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const connection = mysql.createConnection(mysqlConfig)

const createPeople = () => {
  const sql = `INSERT INTO people(name) VALUES("${falso.randFullName()}")`
  
  connection.query(sql, function (error) {
    if (error) console.log(error);
  });
}

const listPeople = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT `name` FROM `people`'
    connection.promise().query(sql).then(([rows]) => {
      resolve(rows)
    }).catch(err => { console.log(err); reject(err) })
  })
}

app.get('/', async (_, res) => {
  createPeople()
  const peopleNames = await listPeople()

  res.send(`
    <div>  
      <h1>Full Cycle Rocks!</h1>
      <ul> 
      ${peopleNames.map(person => `<li>${person.name}</li>`).join('')}
      </ul>
    </div>
  `
  )
})

app.listen(port, () => {
  console.log(`Server up at http://localhost:${port}`)
})
