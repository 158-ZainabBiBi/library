import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { setting } from '../../setting';
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
            localStorage.setItem(setting.application_ID, JSON.stringify(user));
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
        const getUser = localStorage.getItem(setting.application_ID);
        this.user = JSON.parse(getUser);
        return this.user;
    }
    logout() {
        localStorage.removeItem(setting.application_ID);
        localStorage.removeItem("access_token");
        window.location.assign(setting.LoginAppPath + "logout?application_ID=" + setting.application_ID);
        return true;
    }
    logged() {
        const getUser = localStorage.getItem(setting.application_ID);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xvY2F0aW9ubGlicmFyeS9zcmMvbGliL3BhZ2VzL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFXLE1BQU0sZUFBZSxDQUFBO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTXhDLE1BQU0sT0FBTyxZQUFZO0lBRXZCLFlBQ1UsSUFBVSxFQUNWLE9BQWUsRUFDZixPQUFzQjtRQUZ0QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFDNUIsQ0FBQztJQU1MLFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxLQUFLLEVBQUU7WUFDVCxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxJQUFJLEVBQUU7WUFDUixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNO1FBQ0osWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0QsTUFBTSwrQkFBK0IsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdFLElBQUksT0FBTyxJQUFJLCtCQUErQixFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7O1lBNURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsSUFBSTtZQUNKLE1BQU07WUFDTixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XHJcbmltcG9ydCB7IHNldHRpbmcgfSBmcm9tICcuLi8uLi9zZXR0aW5nJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxyXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgYXV0aFRva2VuOiBhbnk7XHJcbiAgdXNlcjogYW55O1xyXG4gIHVzZXJJZDogYW55O1xyXG5cclxuICBzYXZlVG9rZW4odG9rZW4pIHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzc190b2tlblwiLCB0b2tlbik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZURldGFpbCh1c2VyKSB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzZXR0aW5nLmFwcGxpY2F0aW9uX0lELCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZFRva2VuKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc190b2tlblwiKTtcclxuICAgIHRoaXMuYXV0aFRva2VuID0gdG9rZW47XHJcbiAgfVxyXG5cclxuICBsb2FkZGV0YWlsKCkge1xyXG4gICAgY29uc3QgZ2V0VXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNldHRpbmcuYXBwbGljYXRpb25fSUQpO1xyXG4gICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShnZXRVc2VyKTtcclxuICAgIHJldHVybiB0aGlzLnVzZXI7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzZXR0aW5nLmFwcGxpY2F0aW9uX0lEKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihzZXR0aW5nLkxvZ2luQXBwUGF0aCArIFwibG9nb3V0P2FwcGxpY2F0aW9uX0lEPVwiICsgc2V0dGluZy5hcHBsaWNhdGlvbl9JRCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxvZ2dlZCgpIHtcclxuICAgIGNvbnN0IGdldFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5nLmFwcGxpY2F0aW9uX0lEKTtcclxuICAgIGNvbnN0IF9hcHBsaWNhdGlvbl9uYW1lX2FjY2Vzc190b2tlbl8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc190b2tlblwiKTtcclxuICAgIGlmIChnZXRVc2VyICYmIF9hcHBsaWNhdGlvbl9uYW1lX2FjY2Vzc190b2tlbl8pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==