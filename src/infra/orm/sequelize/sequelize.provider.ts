import { Sequelize } from 'sequelize-typescript';
import sequelizeConfig from '@/infra/orm/config/config';
// import {  } from '@/infra/orm/entities';

const SEQUELIZE = 'SEQUELIZE';

export const sequelizeProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(sequelizeConfig);
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
