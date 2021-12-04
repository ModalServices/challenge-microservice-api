import { Sequelize } from 'sequelize-typescript'
import * as SequelizeConfig from '@/infra/orm/config/config'
// const sequelizeConfig = require('../config/config.js')
// const sequelizeConfig = require('../config/config.js')
// import {  } from '@/infra/orm/entities';

const SEQUELIZE = 'SEQUELIZE'

export const sequelizeProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(SequelizeConfig)
      sequelize.addModels([])
      await sequelize.sync()
      return sequelize
    },
  },
]
