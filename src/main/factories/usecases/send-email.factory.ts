import { SendEmail } from '@/domain/usecases'
import { SEND_EMAIL_FACTORY } from '@/main/factories/providers'
import { MailgunService } from '@/services/services'
import { ServiceSendEmail } from '@/services/usecases'

export const sendEmailFactory = {
  provide: SEND_EMAIL_FACTORY,
  useFactory: (mailgunService: MailgunService): SendEmail => {
    return new ServiceSendEmail(mailgunService)
  },
  inject: [MailgunService],
}
