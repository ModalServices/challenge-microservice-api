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
        return badRequest(new InvalidIntegrationKeyError())
      }

      const emailListResponse: SendEmailsController.Result = []

      for (const recipient of params.emailList) {
        try {
          await this.sendEmail.send({
            recipient: recipient,
            subject: params.subject,
            conteudo: params.htmlBody,
          })
          emailListResponse.push({
            email: recipient,
            success: true,
          })
        } catch (err) {
          console.error(err)
          emailListResponse.push({
            email: recipient,
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
    htmlBody: string
    subject: string
  }

  export type Result = EmailList[]

  type EmailList = {
    email: string
    success: boolean
  }
}
