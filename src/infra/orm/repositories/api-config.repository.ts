import { Injectable, Inject } from '@nestjs/common'
import { ApiConfigEntity } from '@/infra/orm/entities'
import { GetIntegrationKeyRepository } from '@/data/protocols'
import { API_CONFIG_REPOSITORY } from '@/infra/orm/sequelize/sequelize.repositories'

@Injectable()
export class ApiConfigRepository implements GetIntegrationKeyRepository {
  constructor(
    @Inject(API_CONFIG_REPOSITORY)
    private readonly apiConfigRepository: typeof ApiConfigEntity,
  ) {}

  async getIntegrationKey(params: GetIntegrationKeyRepository.Params): Promise<GetIntegrationKeyRepository.Result> {
    return await this.apiConfigRepository.findOne<ApiConfigEntity>({
      where: {
        integrationKey: params.integrationKey,
      },
    })
  }
}
