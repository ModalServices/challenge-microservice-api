# Requisitos Funcionais da Api

1. ✅ A aplicação deve ser capaz de receber uma key de integração;
2. ✅ A aplicação deve ser capaz de validar a existência da key internamente;
3. ✅ A aplicação deve ser capaz de receber requisições apenas de servidores permitidos (host e/ou ip);
   - A aplicação impedi o acesso de clientes de ip's diferentes do configurado no .yml
4. ✅ A aplicação deve ser capaz de receber via api um conteúdo HTML que será enviado no email;
5. ✅ A aplicação deve ser capaz de disparar emails para os destinos informados;
6. ✅ A aplicação deve ser capaz de receber multiplos destinatários e enviar os emails;
7. ✅ A aplicação deve retornar um array com os email enviados com sucesso e os com erro;
