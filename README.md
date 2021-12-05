# Desafio de Mensageria em Microserviço

## Principais tecnologias utilizadas para o desenvolvimento

- TypeScript/JavaScript
- Node.js
- NestJS
- Mailgun-js
- Sequelize
- Postgres

Para esse projeto foi utilizado como referência o padrão Clean Architecture

## Como executar

Para esse projeto foi utilizado o Docker com a imagem do Postgres. Todas as informações a api externa (Mailgun) devem ser inseridas no arquivo de configuração que fica no caminho

```powershell
/config/development.yml
```

## Pré-configurações

1. Baixar o [Docker](https://www.docker.com/products/docker-desktop)
2. Rodar a imagem do Postgres

```powershell
docker run --name some-postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
```

3. Criar o banco de dados

```powershell
  npx sequelize-cli db:create
```

4. Criar schema, tabela e inserir dados iniciais

```powershell
  npx sequelize-cli db:migrate
```

5. Agora é só rodar o projeto

```powershell
  nest start
```

## Documentação

- Com o código rodando acesse o [Swagger](https://localhost:3000/api-docs/) para testar o serviço
