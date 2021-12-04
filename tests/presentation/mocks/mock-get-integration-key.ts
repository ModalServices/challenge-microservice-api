import { GetIntegrationKey } from '@/domain/usecases'
import { mockApiConfigModel } from '@/tests/domain/mocks'

export class GetIntegrationKeySpy implements GetIntegrationKey {
  params: GetIntegrationKey.Params
  result = mockApiConfigModel()

  async get(params: GetIntegrationKey.Params): Promise<GetIntegrationKey.Result> {
    this.params = params
    return this.result
  }
}
