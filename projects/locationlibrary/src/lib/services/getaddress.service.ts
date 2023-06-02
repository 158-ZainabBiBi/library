import { Injectable } from '@angular/core';
import { HttpcallService } from './httpcall.service';

@Injectable({
  providedIn: 'root'
})
export class GetaddressService {

  constructor(
    private _HttpcallService_: HttpcallService
  ) { }

  getByPostcode(postcode) {
    var postData = {
      service_NAME: "GETADDRESS",
      request_TYPE: "GET",
      request_URI: "find/" + postcode + "?api-key=V4QHzniNakGufrLJgB3ROw29270&expand=true",
      request_BODY: ""
    }

    return this._HttpcallService_.api(postData);
  }
}
