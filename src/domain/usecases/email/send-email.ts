import { ApiConfigModel } from '@/domain/entities'

export interface SendEmail {
  send: (params: SendEmail.Params) => Promise<SendEmail.Result>
}

export namespace SendEmail {
  export type Params = {
    recipient: string
    subject: string
    conteudo: string
  }
  export type Result = any
}
