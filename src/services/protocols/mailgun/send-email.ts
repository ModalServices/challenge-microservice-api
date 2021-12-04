import { SendEmail } from '@/domain/usecases'

export interface SendEmailService {
  send: (params: SendEmailService.Params) => Promise<SendEmailService.Result>
}

export namespace SendEmailService {
  export type Params = SendEmail.Params
  export type Result = SendEmail.Result
}
