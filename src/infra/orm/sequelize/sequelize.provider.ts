import { Sequelize } from 'sequelize-typescript'
import * as SequelizeConfig from '@/infra/orm/config/config'
import { ApiConfigEntity } from '@/infra/orm/entities'

const SEQUELIZE = 'SEQUELIZE'

export const sequelizeProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(SequelizeConfig)
      sequelize.addModels([ApiConfigEntity])
      await sequelize.sync()
      return sequelize
    },
  },
]
