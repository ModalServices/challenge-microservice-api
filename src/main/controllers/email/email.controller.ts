import { Controller, Body, Post, Res, UsePipes, ValidationPipe, Headers } from '@nestjs/common'
import { ApiSecurity, ApiTags } from '@nestjs/swagger'

import { HttpResponse } from '@/presentation/protocols'
import { controllerAdpter } from '@/main/adpters/controller.adpter'
import { EnviarEmailDto } from './dto'
import { SendEmailsControllerFactory } from '@/main/factories/controllers'

@ApiTags('Email')
@ApiSecurity('api_key', ['Authorization'])
@Controller('email')
export class EmailController {
  constructor(private readonly sendEmailsControllerFactory: SendEmailsControllerFactory) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async sendEmail(@Headers('authorization') authorization, @Body() body: EnviarEmailDto, @Res() res: any): Promise<HttpResponse> {
    const resultado = await controllerAdpter(this.sendEmailsControllerFactory.build(), { ...body, integrationKey: authorization })
    return res.status(resultado.statusCode).json(resultado)
  }
}
