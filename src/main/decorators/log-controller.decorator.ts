import { Controller, HttpResponse } from '@/presentation/protocols'

export class LogControllerDecorator implements Controller {
  constructor(private readonly controller: Controller) {}

  async handle(requisicao: any): Promise<HttpResponse> {
    const httpResposta = await this.controller.handle(requisicao)

    return httpResposta
  }
}
