import { ApiConfigModel } from '@/domain/entities'
import * as faker from 'faker'

export const mockApiConfigModel = (): ApiConfigModel => ({
  uuid: faker.random.word(),
  integrationKey: faker.random.word(),
  status: true,
  createdAt: faker.date.past(),
})
