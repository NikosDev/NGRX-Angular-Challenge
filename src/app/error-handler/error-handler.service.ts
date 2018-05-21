import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import * as toastr from 'toastr';


@Injectable()
export class ErrorHandlerService {

  constructor() { }

  private _options: any = {
    badRequest: "Bad Request",
    unauthorized: "Unauthorized",
    notFound: "Not Found",
    internalServerError: "Internal Server Error",
    unknown: "Unknown Error"
  }

  handleHttpError(error: HttpErrorResponse) {
    if (error.status) {
      switch (error.status) {
        case 400:
          toastr.error(this._options.badRequest);
          break;
        case 401:
          toastr.error(this._options.unauthorized);
          break;
        case 404:
          toastr.error(this._options.notFound);
          break;
        case 500:
          toastr.error(this._options.internalServerError);
          break;
        default:
          toastr.info(this._options.unknown);
          break;
      }
    }
    else {
      toastr.error(this._options.unknown);
    }
  }
  
}
