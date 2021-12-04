export class MissingParameterError extends Error {
  constructor(fieldName: string) {
    super(`Campo ${fieldName} não preenchido`)
    this.name = `campoNaoPreenchido`
  }
}
