import { Injectable, Inject } from '@nestjs/common'

import { Controller } from '@/presentation/protocols'
import { GetIntegrationKey, SendEmail } from '@/domain/usecases'
import { GET_INTEGRATION_KEY_FACTORY, SEND_EMAIL_FACTORY } from '@/main/factories/providers'
import { SendEmailsController } from '@/presentation/controllers'
import { LogControllerDecoratorFactory } from './log-controller-decorator.factory'

@Injectable()
export class SendEmailsControllerFactory {
  constructor(
    @Inject(GET_INTEGRATION_KEY_FACTORY) private readonly getIntegrationKey: GetIntegrationKey,
    @Inject(SEND_EMAIL_FACTORY) private readonly sendEmail: SendEmail,
  ) {}

  public build(): Controller {
    const controller = new SendEmailsController(this.getIntegrationKey, this.sendEmail)
    return new LogControllerDecoratorFactory(controller)
  }
}
