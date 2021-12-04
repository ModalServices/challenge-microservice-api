import { Module } from '@nestjs/common'
import { apiConfigProvider } from '@/infra/orm/providers/api-config.provider'
import { ApiConfigRepository } from '@/infra/orm/repositories'
import { MailgunService } from '@/services/services'
import { getIntegrationKeyFactory, sendEmailFactory } from '.'

@Module({
  providers: [
    // repositories
    ApiConfigRepository,
    // services
    MailgunService,
    // providers
    apiConfigProvider,
    // usecases factories
    getIntegrationKeyFactory,
    sendEmailFactory,
  ],
  exports: [
    // factories
    getIntegrationKeyFactory,
    sendEmailFactory,
  ],
})
export class FactoryModule {}
