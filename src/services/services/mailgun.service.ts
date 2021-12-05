import { Injectable } from '@nestjs/common'
import { SendEmailService } from '@/services/protocols'
import * as config from 'config'
const mailgun = require('mailgun-js')

@Injectable()
export class MailgunService implements SendEmailService {
  constructor() {}

  private async createClient() {
    const mailgunConfig = config.get('mailgun')
    return await mailgun({
      apiKey: mailgunConfig.apikey,
      domain: mailgunConfig.domain,
    })
  }

  async send(params: SendEmailService.Params): Promise<SendEmailService.Result> {
    const mailgunConfig = config.get('mailgun')
    const mailgunClient = await this.createClient()
    const data = {
      from: mailgunConfig.email,
      to: params.recipient,
      subject: params.subject,
      html: params.conteudo,
    }

    const result = await new Promise((resolve, reject) => {
      mailgunClient.messages().send(data, (error) => {
        if (error) {
          return reject(error)
        }
        return resolve(true)
      })
    })

    return result
  }
}
