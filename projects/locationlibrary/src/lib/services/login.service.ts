import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

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
      localStorage.setItem("LocationManagement", JSON.stringify(user));
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
    const getUser = localStorage.getItem("LocationManagement");
    this.user = JSON.parse(getUser);
    return this.user;
  }

  logout() {
    localStorage.removeItem("LocationManagement");
    localStorage.removeItem("access_token");
    window.location.assign("http://accounts.kitaas.edu.pk/#/" + "logout?application_ID=" + "LocationManagement");
    return true;
  }

  logged() {
    const getUser = localStorage.getItem("LocationManagement");
    const _application_name_access_token_ = localStorage.getItem("access_token");
    if (getUser && _application_name_access_token_) {
      return true;
    } else {
      return false;
    }
  }
}
