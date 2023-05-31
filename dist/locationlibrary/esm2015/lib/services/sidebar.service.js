import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";
import { LoginService } from './login.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
import * as i2 from "./login.service";
export class SidebarService {
    constructor(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.LoggedUserId = this.loginService.loaddetail();
        this.BaseUrl = this.loginService.loaddetail().oauthservice_PATH;
    }
    userprivileges() {
        return this.http.post(this.BaseUrl + "login/userprivileges", { application_ID: this.loginService.loaddetail().application_ID }, {
            headers: new Headers({
                "Content-Type": "application/json",
                grant_type: "password",
                authorization: "bearer " + this.loginService.loaddetail().basic_Token_
            })
        }).pipe(map(res => res.json()));
    }
}
SidebarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SidebarService_Factory() { return new SidebarService(i0.ɵɵinject(i1.Http), i0.ɵɵinject(i2.LoginService)); }, token: SidebarService, providedIn: "root" });
SidebarService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
SidebarService.ctorParameters = () => [
    { type: Http },
    { type: LoginService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBWSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUsvQyxNQUFNLE9BQU8sY0FBYztJQUV6QixZQUFvQixJQUFVLEVBQVUsWUFBMEI7UUFBOUMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRWxFLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QyxZQUFPLEdBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUhNLENBQUM7SUFLdkUsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLEVBQ3JDLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsY0FBYyxFQUFFLEVBQ2pFO1lBQ0UsT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDO2dCQUNuQixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxVQUFVLEVBQUUsVUFBVTtnQkFDdEIsYUFBYSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFlBQVk7YUFDdkUsQ0FBQztTQUNILENBQ0YsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O1lBdEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsSUFBSTtZQUdKLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkgeyB9XHJcblxyXG4gIExvZ2dlZFVzZXJJZCA9IHRoaXMubG9naW5TZXJ2aWNlLmxvYWRkZXRhaWwoKTtcclxuICBCYXNlVXJsOiBhbnkgPSB0aGlzLmxvZ2luU2VydmljZS5sb2FkZGV0YWlsKCkub2F1dGhzZXJ2aWNlX1BBVEg7XHJcblxyXG4gIHVzZXJwcml2aWxlZ2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICB0aGlzLkJhc2VVcmwgKyBcImxvZ2luL3VzZXJwcml2aWxlZ2VzXCIsXHJcbiAgICAgIHsgYXBwbGljYXRpb25fSUQ6IHRoaXMubG9naW5TZXJ2aWNlLmxvYWRkZXRhaWwoKS5hcHBsaWNhdGlvbl9JRCB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBncmFudF90eXBlOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBcImJlYXJlciBcIiArIHRoaXMubG9naW5TZXJ2aWNlLmxvYWRkZXRhaWwoKS5iYXNpY19Ub2tlbl9cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICApLnBpcGUobWFwKHJlcyA9PiByZXMuanNvbigpKSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19