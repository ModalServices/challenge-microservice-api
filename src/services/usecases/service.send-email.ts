import { SendEmailService } from './../protocols/mailgun/send-email'
import { SendEmail } from '@/domain/usecases'

export class ServiceSendEmail implements SendEmail {
  constructor(private readonly sendEmail: SendEmailService) {}

  async send(params: SendEmailService.Params): Promise<SendEmailService.Result> {
    return await this.sendEmail.send(params)
  }
}
