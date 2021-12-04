import { SendEmail } from '@/domain/usecases'

export class SendEmailSpy implements SendEmail {
  params: SendEmail.Params

  async send(params: SendEmail.Params): Promise<SendEmail.Result> {
    this.params = params
    return
  }
}
