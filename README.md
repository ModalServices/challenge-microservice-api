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

## Detalhamento dos requisitos

1. A aplicação é capaz de receber uma key de integração;
2. A aplicação é capaz de validar a existência da key internamente;
   - Por padrão a key é gerada no insert do banco com o valor `integration_key` com status `true` para chaves ativas
3. A aplicação é capaz de receber requisições apenas de servidores permitidos (host e/ou ip);
   - A aplicação impedi o acesso de clientes de ip's diferentes do configurado no .yml, no campo origin. Para validar basta depurar o arquivo `src/validation/guards/auth.guard.ts`
4. A aplicação é capaz de receber via api um conteúdo HTML que será enviado no email;
5. A aplicação é capaz de disparar emails para os destinos informados;
6. A aplicação é capaz de receber multiplos destinatários e enviar os emails;
7. A aplicação retorna um array com os email enviados com sucesso e os com erro;
