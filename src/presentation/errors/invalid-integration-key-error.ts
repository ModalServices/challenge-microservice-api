export class InvalidIntegrationKeyError extends Error {
  constructor() {
    super('Chave inválida ou não encontrada!')
    this.name = 'INTEGRATION_KEY_ERROR'
  }
}
