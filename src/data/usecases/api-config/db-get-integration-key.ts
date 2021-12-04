import { GetIntegrationKey } from '@/domain/usecases'
import { GetIntegrationKeyRepository } from '@/data/protocols'

export class DbGetIntegrationKey implements GetIntegrationKey {
  constructor(private readonly getIntegrationKeyRepository: GetIntegrationKeyRepository) {}

  async get(params: GetIntegrationKey.Params): Promise<GetIntegrationKey.Result> {
    return await this.getIntegrationKeyRepository.getIntegrationKey(params)
  }
}
