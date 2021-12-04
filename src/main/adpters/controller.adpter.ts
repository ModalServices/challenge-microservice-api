import { Controller, HttpResponse } from '@/presentation/protocols';

export const controllerAdpter = async (
  controller: Controller,
  requisicao?: any
): Promise<HttpResponse> => {
  return await controller.handle(requisicao);
};
