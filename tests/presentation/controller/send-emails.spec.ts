import * as faker from 'faker'
import { badRequest, serverError } from '@/presentation/helpers'
import { throwError } from '@/tests/domain/mocks/test-helpers'

import { SendEmailsController } from '@/presentation/controllers'
import { GetIntegrationKeySpy, SendEmailSpy } from '@/tests/presentation/mocks'
import { InvalidIntegrationKeyError, MissingParameterError } from '@/presentation/errors'

type SutTypes = {
  sut: SendEmailsController
  getIntegrationKeySpy: GetIntegrationKeySpy
  sendEmailSpy: SendEmailSpy
}

const mockParams = (integrationKey: string): SendEmailsController.Params => ({
  integrationKey,
  assunto: faker.random.word(),
  conteudoHtml: faker.random.words(),
  emailList: [faker.internet.email()],
})

const makeSut = (): SutTypes => {
  const getIntegrationKeySpy = new GetIntegrationKeySpy()
  const sendEmailSpy = new SendEmailSpy()
  const sut = new SendEmailsController(getIntegrationKeySpy, sendEmailSpy)
  return {
    sut,
    getIntegrationKeySpy,
    sendEmailSpy,
  }
}

describe('SendEmailsController', () => {
  test('A aplicação deve ser capaz de receber uma key de integração', async () => {
    const { sut, getIntegrationKeySpy } = makeSut()
    const integrationKey = faker.random.word()
    await sut.handle(mockParams(integrationKey))
    expect(getIntegrationKeySpy.params).toEqual({ integrationKey })
  })

  test('A aplicação deve ser capaz de validar a existência da key internamente', async () => {
    const { sut, getIntegrationKeySpy } = makeSut()
    const integrationKey = faker.random.word()
    let mockReturn = getIntegrationKeySpy.result
    mockReturn.status = false
    jest.spyOn(getIntegrationKeySpy, 'get').mockReturnValueOnce(Promise.resolve(mockReturn))
    const httpResponse = await sut.handle(mockParams(integrationKey))
    expect(httpResponse).toEqual(badRequest(new InvalidIntegrationKeyError()))
  })

  test('A aplicação deve ser capaz de receber via api um conteúdo HTML que será enviado no email', async () => {
    const { sut, sendEmailSpy } = makeSut()
    const integrationKey = faker.random.word()
    const request = mockParams(integrationKey)
    await sut.handle(request)
    expect(sendEmailSpy.params.conteudo).toBe(request.conteudoHtml)
  })

  test('A aplicação deve ser capaz de disparar emails para os destinos informados', async () => {
    const { sut, sendEmailSpy } = makeSut()
    const integrationKey = faker.random.word()
    const request = mockParams(integrationKey)
    await sut.handle(request)
    expect(request.emailList).toContain(sendEmailSpy.params.destinatario)
  })

  test('A aplicação deve ser capaz de receber multiplos destinatários e enviar os emails', async () => {
    const { sut } = makeSut()
    const integrationKey = faker.random.word()
    const request = mockParams(integrationKey)
    const number = faker.datatype.number(5)
    for (let x = 0; x < number; x++) {
      request.emailList.push(faker.internet.email())
    }
    const httpResponse = await sut.handle(request)
    const sendedEmails = httpResponse.body.map((item) => item.email)
    expect(sendedEmails).toEqual(request.emailList)
  })

  test('A aplicação deve retornar um array com os email enviados com sucesso e os com erro', async () => {
    const { sut } = makeSut()
    const integrationKey = faker.random.word()
    const request = mockParams(integrationKey)
    const number = faker.datatype.number(5)
    for (let x = 0; x < number; x++) {
      request.emailList.push(faker.internet.email())
    }
    const httpResponse = await sut.handle(request)
    expect(Array.isArray(httpResponse.body)).toBeTruthy()
    expect(httpResponse.body[0]).toHaveProperty('success')
  })

  test('A aplicação deve retornar 500 caso getIntegrationKeySpy falhe', async () => {
    const { sut, getIntegrationKeySpy } = makeSut()
    const integrationKey = faker.random.word()
    const request = mockParams(integrationKey)
    jest.spyOn(getIntegrationKeySpy, 'get').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('A aplicação deve ser capaz de validar se a key está sendo passada como parâmetro', async () => {
    const { sut, getIntegrationKeySpy } = makeSut()
    const integrationKey = null
    const httpResponse = await sut.handle(mockParams(integrationKey))
    expect(httpResponse).toEqual(badRequest(new MissingParameterError('Integration Key')))
  })
})
