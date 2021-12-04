import { SendEmailsControllerFactory } from '@/main/factories/controllers'
import { GetIntegrationKeySpy, SendEmailSpy } from '@/tests/presentation/mocks'

jest.mock('@/main/factories/controllers/send-email.factory')

const makeSut = () => {
  const getIntegrationKeySpy = new GetIntegrationKeySpy()
  const sendEmailSpy = new SendEmailSpy()
  return {
    getIntegrationKeySpy,
    sendEmailSpy,
  }
}

describe('SendEmailsControllerFactory', () => {
  test('Deve construir SendEmailsControllerFactory corretamente', () => {
    const { getIntegrationKeySpy, sendEmailSpy } = makeSut()
    new SendEmailsControllerFactory(getIntegrationKeySpy, sendEmailSpy)
    expect(SendEmailsControllerFactory).toHaveBeenCalledWith(getIntegrationKeySpy, sendEmailSpy)
  })
})
