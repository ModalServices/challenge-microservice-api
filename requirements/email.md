A aplicação deve ser capaz de receber uma key de integração;
A aplicação deve ser capaz de validar a existência da key internamente;
A aplicação deve ser capaz de receber requisições apenas de servidores permitidos (host e/ou ip);

A aplicação deve ser capaz de receber via api um conteúdo HTML que será enviado no email;
A aplicação deve ser capaz de disparar emails para os destinos informados;
A aplicação deve ser capaz de receber multiplos destinatários e enviar os emails;
A aplicação deve retornar um array com os email enviados com sucesso e os com erro;

# A aplicação deve ser capaz de receber uma key de integração

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/key**
2. Valida se a requisição foi feita por um servidores permitidos (host e/ou ip);
3. Valida dado obrigatório **api_key**
4. **Cadastrar** uma key de integração
5. Retorna **204**, sem dados

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **403** se o usuário não for admin
3. ✅ Retorna erro **400** se question ou answers não forem fornecidos pelo client
4. ✅ Retorna erro **500** se der erro ao tentar criar a enquete
