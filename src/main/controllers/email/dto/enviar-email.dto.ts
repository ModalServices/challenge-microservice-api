import { IsInt, IsNotEmpty, IsString } from 'class-validator'

import { ValidatorMessage } from '@/main/utils/validator-message'
export class EnviarEmailDto {
  @IsNotEmpty({ message: ValidatorMessage.empty('Lista de Emails') })
  emailList: string[]

  @IsString({ message: ValidatorMessage.string('Corpo do email') })
  @IsNotEmpty({ message: ValidatorMessage.empty('Corpo do email') })
  conteudoHtml: string

  @IsString({ message: ValidatorMessage.string('Assunto do email') })
  @IsNotEmpty({ message: ValidatorMessage.empty('Assunto do email') })
  assunto: string
}
