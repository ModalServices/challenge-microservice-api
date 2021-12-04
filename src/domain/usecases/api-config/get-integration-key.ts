import { ApiConfigModel } from '@/domain/entities'

export interface GetIntegrationKey {
  get: (params: GetIntegrationKey.Params) => Promise<GetIntegrationKey.Result>
}

export namespace GetIntegrationKey {
  export type Params = {
    integrationKey: string
  }
  export type Result = ApiConfigModel
}
