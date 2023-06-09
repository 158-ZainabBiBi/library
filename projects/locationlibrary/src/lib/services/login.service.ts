import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { settings } from '../settings';

@Injectable({
  providedIn: "root"
})

export class LoginService {

  constructor(
    private http: Http,
    private _router: Router,
    private _toastr: ToastrService,
  ) { }

  authToken: any;
  user: any;
  userId: any;

  saveToken(token) {
    if (token) {
      localStorage.setItem("access_token", token);
      return true;
    } else {
      return false;
    }
  }

  saveDetail(user) {
    if (user) {
      localStorage.setItem(settings.application_ID, JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  loadToken() {
    const token = localStorage.getItem("access_token");
    this.authToken = token;
  }

  loaddetail() {
    const getUser = localStorage.getItem(settings.application_ID);
    this.user = JSON.parse(getUser);
    return this.user;
  }

  logout() {
    localStorage.removeItem(settings.application_ID);
    localStorage.removeItem("access_token");
    window.location.assign(settings.LoginAppPath + "home/logout?application_ID=" + settings.application_ID);
    return true;
  }

  logged() {
    const getUser = localStorage.getItem(settings.application_ID);
    const _application_name_access_token_ = localStorage.getItem("access_token");
    if (getUser && _application_name_access_token_) {
      return true;
    } else {
      return false;
    }
  }
}
