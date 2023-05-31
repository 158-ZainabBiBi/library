import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { setting } from 'projects/locationlibrary/src/lib/setting';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xvY2F0aW9ubGlicmFyeS9zcmMvbGliL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFXLE1BQU0sZUFBZSxDQUFBO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7QUFNbkUsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFDVSxJQUFVLEVBQ1YsT0FBZSxFQUNmLE9BQXNCO1FBRnRCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUM1QixDQUFDO0lBTUwsU0FBUyxDQUFDLEtBQUs7UUFDYixJQUFJLEtBQUssRUFBRTtZQUNULFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUk7UUFDYixJQUFJLElBQUksRUFBRTtZQUNSLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU07UUFDSixZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRCxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsd0JBQXdCLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pHLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RCxNQUFNLCtCQUErQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0UsSUFBSSxPQUFPLElBQUksK0JBQStCLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7WUE1REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFQUSxJQUFJO1lBQ0osTUFBTTtZQUNOLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJ1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcclxuaW1wb3J0IHsgc2V0dGluZyB9IGZyb20gJ3Byb2plY3RzL2xvY2F0aW9ubGlicmFyeS9zcmMvbGliL3NldHRpbmcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHAsXHJcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICApIHsgfVxyXG5cclxuICBhdXRoVG9rZW46IGFueTtcclxuICB1c2VyOiBhbnk7XHJcbiAgdXNlcklkOiBhbnk7XHJcblxyXG4gIHNhdmVUb2tlbih0b2tlbikge1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzX3Rva2VuXCIsIHRva2VuKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlRGV0YWlsKHVzZXIpIHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNldHRpbmcuYXBwbGljYXRpb25fSUQsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkVG9rZW4oKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgdGhpcy5hdXRoVG9rZW4gPSB0b2tlbjtcclxuICB9XHJcblxyXG4gIGxvYWRkZXRhaWwoKSB7XHJcbiAgICBjb25zdCBnZXRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc2V0dGluZy5hcHBsaWNhdGlvbl9JRCk7XHJcbiAgICB0aGlzLnVzZXIgPSBKU09OLnBhcnNlKGdldFVzZXIpO1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcjtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHNldHRpbmcuYXBwbGljYXRpb25fSUQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHNldHRpbmcuTG9naW5BcHBQYXRoICsgXCJsb2dvdXQ/YXBwbGljYXRpb25fSUQ9XCIgKyBzZXR0aW5nLmFwcGxpY2F0aW9uX0lEKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbG9nZ2VkKCkge1xyXG4gICAgY29uc3QgZ2V0VXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNldHRpbmcuYXBwbGljYXRpb25fSUQpO1xyXG4gICAgY29uc3QgX2FwcGxpY2F0aW9uX25hbWVfYWNjZXNzX3Rva2VuXyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgaWYgKGdldFVzZXIgJiYgX2FwcGxpY2F0aW9uX25hbWVfYWNjZXNzX3Rva2VuXykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19