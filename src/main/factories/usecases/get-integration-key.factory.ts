import { GetIntegrationKey } from '@/domain/usecases'
import { GET_INTEGRATION_KEY_FACTORY } from '@/main/factories/providers'
import { ApiConfigRepository } from '@/infra/orm/repositories'
import { DbGetIntegrationKey } from '@/data/usecases'

export const getIntegrationKeyFactory = {
  provide: GET_INTEGRATION_KEY_FACTORY,
  useFactory: (apiConfigRepository: ApiConfigRepository): GetIntegrationKey => {
    return new DbGetIntegrationKey(apiConfigRepository)
  },
  inject: [ApiConfigRepository],
}
