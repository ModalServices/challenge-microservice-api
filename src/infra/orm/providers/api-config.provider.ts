import { ApiConfigEntity } from '@/infra/orm/entities'
import { API_CONFIG_REPOSITORY } from '@/infra/orm/sequelize/sequelize.repositories'

export const apiConfigProvider = {
  provide: API_CONFIG_REPOSITORY,
  useValue: ApiConfigEntity,
}
