# Full Cycle 3.0 | Desafio Docker - Nginx com Node.js

Foi proposta a utilização do nginx como proxy reverso para realizar a chamada para um servidor NodeJS. A aplicação deve registrar um nome na tabela `people` no banco de dados MySQL sempre que for disparada uma requisição `GET` para a rota `/`. O retorno da aplicação NodeJS para o nginx deverá ser:
```
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

## Como rodar

Basta apenas clonar o repositório e rodar o comando abaixo:

```
docker-compose up -d
```

O nginx poderá ser acessado através da porta `8080`, fazendo o proxy reverso para a API NodeJS que está rodando na porta `3000`.
