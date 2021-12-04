import { GetIntegrationKey } from '@/domain/usecases'

export interface GetIntegrationKeyRepository {
  getIntegrationKey: (params: GetIntegrationKeyRepository.Params) => Promise<GetIntegrationKeyRepository.Result>
}

export namespace GetIntegrationKeyRepository {
  export type Params = GetIntegrationKey.Params
  export type Result = GetIntegrationKey.Result
}
