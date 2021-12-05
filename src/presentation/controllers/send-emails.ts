import { badRequest } from './../helpers/http-helper'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { GetIntegrationKey, SendEmail } from '@/domain/usecases'
import { ok, serverError } from '@/presentation/helpers'
import { InvalidIntegrationKeyError, MissingParameterError } from '@/presentation/errors'

export class SendEmailsController implements Controller {
  constructor(private readonly getIntegrationKey: GetIntegrationKey, private readonly sendEmail: SendEmail) {}

  async handle(params: SendEmailsController.Params): Promise<HttpResponse> {
    try {
      if (!params.integrationKey) {
        return badRequest(new MissingParameterError('Integration Key'))
      }
      const apiConfig = await this.getIntegrationKey.get({ integrationKey: params.integrationKey })

      if ((apiConfig && !apiConfig.status) || !apiConfig) {
        console.error('Chave invalida...')
        return badRequest(new InvalidIntegrationKeyError())
      }

      const emailListResponse: SendEmailsController.Result = []

      for (const destinatario of params.emailList) {
        try {
          await this.sendEmail.send({
            destinatario: destinatario,
            assunto: params.assunto,
            conteudo: params.conteudoHtml,
          })
          emailListResponse.push({
            email: destinatario,
            success: true,
          })
        } catch (err) {
          console.error(err)
          emailListResponse.push({
            email: destinatario,
            success: false,
          })
        }
      }

      const result: SendEmailsController.Result = emailListResponse

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

  export type Result = EmailList[]

  type EmailList = {
    email: string
    success: boolean
  }
}
