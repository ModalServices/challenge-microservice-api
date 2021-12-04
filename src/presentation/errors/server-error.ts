export class ServerError extends Error {
  constructor(stack: string) {
    super('Internal server error')
    this.name = 'Erro interno do servidor'
    this.stack = stack
  }
}
