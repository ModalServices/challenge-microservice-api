import { badRequest } from './../helpers/http-helper'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { GetIntegrationKey, SendEmail } from '@/domain/usecases'
import { ok, serverError } from '@/presentation/helpers'
import { InvalidIntegrationKeyError } from '@/presentation/errors'

export class SendEmailsController implements Controller {
  constructor(private readonly getIntegrationKey: GetIntegrationKey, private readonly sendEmail: SendEmail) {}

  async handle(params: SendEmailsController.Params): Promise<HttpResponse> {
    try {
      const apiConfig = await this.getIntegrationKey.get({ integrationKey: params.integrationKey })

      if ((apiConfig && !apiConfig.status) || !apiConfig) {
        console.info('Chave invalida...')
        return badRequest(new InvalidIntegrationKeyError())
      }

      let success: string[] = []
      let error: string[] = []

      for (const destinatario of params.emailList) {
        try {
          await this.sendEmail.send({
            destinatario: destinatario,
            assunto: params.assunto,
            conteudo: params.conteudoHtml,
          })
          success.push(destinatario)
        } catch (err) {
          console.error(err)
          error.push(destinatario)
        }
      }

      const result: SendEmailsController.Result = {
        success,
        error,
      }

      return ok(result)
    } catch (erro) {
      console.error(erro)
      return serverError(erro)
    }
  }
}

export namespace SendEmailsController {
  export type Params = {
    integrationKey: string
    emailList: string[]
    conteudoHtml: string
    assunto: string
  }

  export type Result = {
    success: string[]
    error: string[]
  }
}
