import { ApiConfigModel } from '@/domain/entities'

export interface SendEmail {
  send: (params: SendEmail.Params) => Promise<SendEmail.Result>
}

export namespace SendEmail {
  export type Params = {
    destinatario: string
    assunto: string
    conteudo: string
  }
  export type Result = any
}
