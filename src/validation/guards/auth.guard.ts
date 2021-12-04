import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import * as config from 'config'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const host = request.hostname
    const ip = request.ip.split(':').pop()
    const apiConfig = config.get('api')

    console.debug({ host, ip })
    if (request.headers && request.headers.authorization) {
      if (host === 'localhost' || ip === apiConfig.origin) {
        return true
      }
    }
    return false
  }
}
