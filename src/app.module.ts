import { Module } from '@nestjs/common'

import { AppModule as MainModule } from '@/main/app.module'

@Module({
  imports: [
    MainModule,
  ],
})
export class AppModule {}