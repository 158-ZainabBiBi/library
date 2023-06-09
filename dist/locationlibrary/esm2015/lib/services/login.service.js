import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { settings } from '../settings';
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
import * as i2 from "@angular/router";
import * as i3 from "ngx-toastr";
export class LoginService {
    constructor(http, _router, _toastr) {
        this.http = http;
        this._router = _router;
        this._toastr = _toastr;
    }
    saveToken(token) {
        if (token) {
            localStorage.setItem("access_token", token);
            return true;
        }
        else {
            return false;
        }
    }
    saveDetail(user) {
        if (user) {
            localStorage.setItem(settings.application_ID, JSON.stringify(user));
            return true;
        }
        else {
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
        }
        else {
            return false;
        }
    }
}
LoginService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoginService_Factory() { return new LoginService(i0.ɵɵinject(i1.Http), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.ToastrService)); }, token: LoginService, providedIn: "root" });
LoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
LoginService.ctorParameters = () => [
    { type: Http },
    { type: Router },
    { type: ToastrService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xvY2F0aW9ubGlicmFyeS9zcmMvbGliL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFXLE1BQU0sZUFBZSxDQUFBO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBTXZDLE1BQU0sT0FBTyxZQUFZO0lBRXZCLFlBQ1UsSUFBVSxFQUNWLE9BQWUsRUFDZixPQUFzQjtRQUZ0QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFDNUIsQ0FBQztJQU1MLFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxLQUFLLEVBQUU7WUFDVCxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxJQUFJLEVBQUU7WUFDUixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNO1FBQ0osWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLDZCQUE2QixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4RyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUQsTUFBTSwrQkFBK0IsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdFLElBQUksT0FBTyxJQUFJLCtCQUErQixFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7O1lBNURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsSUFBSTtZQUNKLE1BQU07WUFDTixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5pbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gJy4uL3NldHRpbmdzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcbiAgKSB7IH1cblxuICBhdXRoVG9rZW46IGFueTtcbiAgdXNlcjogYW55O1xuICB1c2VySWQ6IGFueTtcblxuICBzYXZlVG9rZW4odG9rZW4pIHtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzX3Rva2VuXCIsIHRva2VuKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2F2ZURldGFpbCh1c2VyKSB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNldHRpbmdzLmFwcGxpY2F0aW9uX0lELCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRUb2tlbigpIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzX3Rva2VuXCIpO1xuICAgIHRoaXMuYXV0aFRva2VuID0gdG9rZW47XG4gIH1cblxuICBsb2FkZGV0YWlsKCkge1xuICAgIGNvbnN0IGdldFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5ncy5hcHBsaWNhdGlvbl9JRCk7XG4gICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShnZXRVc2VyKTtcbiAgICByZXR1cm4gdGhpcy51c2VyO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHNldHRpbmdzLmFwcGxpY2F0aW9uX0lEKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFjY2Vzc190b2tlblwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHNldHRpbmdzLkxvZ2luQXBwUGF0aCArIFwiaG9tZS9sb2dvdXQ/YXBwbGljYXRpb25fSUQ9XCIgKyBzZXR0aW5ncy5hcHBsaWNhdGlvbl9JRCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBsb2dnZWQoKSB7XG4gICAgY29uc3QgZ2V0VXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNldHRpbmdzLmFwcGxpY2F0aW9uX0lEKTtcbiAgICBjb25zdCBfYXBwbGljYXRpb25fbmFtZV9hY2Nlc3NfdG9rZW5fID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NfdG9rZW5cIik7XG4gICAgaWYgKGdldFVzZXIgJiYgX2FwcGxpY2F0aW9uX25hbWVfYWNjZXNzX3Rva2VuXykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==