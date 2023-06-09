import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map, catchError } from "rxjs/operators";

import { LoginService } from "./login.service";
import { settings } from "../settings";

@Injectable({
  providedIn: 'root'
})
export class HttpcallService {

 constructor(
    private http: Http,
    private loginService: LoginService
  ) { }

  authToken: any;
  user: any;
  userId: any;

  loaddetail() {
    const getUser = localStorage.getItem(settings.application_ID);
    this.user = JSON.parse(getUser);
    return this.user;
  }

  BaseUrl: any = this.loaddetail().applicationservice_PATH;
  AuthUrl: any = this.loaddetail().oauthservice_PATH;

  // BaseUrl: any = this.loginService.loaddetail().applicationservice_PATH;
  // AuthUrl: any = this.loginService.loaddetail().oauthservice_PATH;

  api(postData) {
    return this.http.post(this.BaseUrl + "apigateway", postData).pipe(map(res => res.json()));
  }

}
