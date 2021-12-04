import { Module } from '@nestjs/common'
import { SequelizeModule } from '@/infra/orm/sequelize/sequelize.module'
import { EmailModule } from '@/main/controllers/email/email.module'
@Module({
  imports: [
    SequelizeModule,
    // Controller Modules
    EmailModule,
  ],
})
export class MainModule {}
