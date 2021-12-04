import { Module, HttpModule } from '@nestjs/common'

import { SequelizeModule } from '@/infra/orm/sequelize/sequelize.module'
// import { GenericModule } from './controllers/generic/generic.module'

@Module({
  imports: [
    HttpModule,
    SequelizeModule,
    // Controller Modules
  ],
})
export class AppModule {}
