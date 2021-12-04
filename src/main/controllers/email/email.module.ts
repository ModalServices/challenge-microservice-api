import { Module } from '@nestjs/common'

import { FactoryModule } from '@/main/factories/usecases/factory.module'
import { EmailController } from './email.controller'
import { SendEmailsControllerFactory } from '@/main/factories/controllers'
@Module({
  imports: [FactoryModule],
  controllers: [EmailController],
  providers: [SendEmailsControllerFactory],
})
export class EmailModule {}
