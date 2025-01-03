import { Injectable } from '@angular/core';
import { messages } from '../constants/messages';
import { IResponseStatus } from '../interfaces/i-response-status';
import { IResultApi } from '../interfaces/i-result-api';


@Injectable({ providedIn: 'root' })
export class StatusResponseService {
  constructor() { }

  error<T>(httpErrorResponse: any): IResponseStatus<T>  {
    let { error, ok, status, StatusCode } = httpErrorResponse;
    let responseStatus: IResponseStatus<T> = <IResponseStatus<T>>{}

    if (StatusCode) {
      if (StatusCode == 404 || StatusCode == 500) {
        responseStatus = { message: error.Message, statusCode: StatusCode, ok }
      }
    } else {
      if (status == 401) {
        responseStatus = { message: error.message, statusCode: status, ok }
      } else if (status == 403) {
        responseStatus = { message: messages.serviceFail, statusCode: status, ok }
      } else if (status == 0 || status == 500) {
        responseStatus = { message: messages.serviceNotFound, statusCode: status, ok }
      }
    }
    return responseStatus;
  }

  succes<T>(result: IResultApi): IResponseStatus<T> {
    let responseStatus: IResponseStatus<T> = <IResponseStatus<T>>{}
    responseStatus = { data: result.data, message: result.message, statusCode: result.statusCode, ok: result.status }
    return responseStatus;
  }


}
