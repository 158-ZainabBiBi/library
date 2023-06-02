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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvc2VydmljZXMvc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBWSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUsvQyxNQUFNLE9BQU8sY0FBYztJQUV6QixZQUFvQixJQUFVLEVBQVUsWUFBMEI7UUFBOUMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRWxFLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QyxZQUFPLEdBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUhNLENBQUM7SUFLdkUsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLEVBQ3JDLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsY0FBYyxFQUFFLEVBQ2pFO1lBQ0UsT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDO2dCQUNuQixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxVQUFVLEVBQUUsVUFBVTtnQkFDdEIsYUFBYSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFlBQVk7YUFDdkUsQ0FBQztTQUNILENBQ0YsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O1lBdEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTlEsSUFBSTtZQUVKLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vbG9naW4uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7IH1cclxuXHJcbiAgTG9nZ2VkVXNlcklkID0gdGhpcy5sb2dpblNlcnZpY2UubG9hZGRldGFpbCgpO1xyXG4gIEJhc2VVcmw6IGFueSA9IHRoaXMubG9naW5TZXJ2aWNlLmxvYWRkZXRhaWwoKS5vYXV0aHNlcnZpY2VfUEFUSDtcclxuXHJcbiAgdXNlcnByaXZpbGVnZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIHRoaXMuQmFzZVVybCArIFwibG9naW4vdXNlcnByaXZpbGVnZXNcIixcclxuICAgICAgeyBhcHBsaWNhdGlvbl9JRDogdGhpcy5sb2dpblNlcnZpY2UubG9hZGRldGFpbCgpLmFwcGxpY2F0aW9uX0lEIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIGdyYW50X3R5cGU6IFwicGFzc3dvcmRcIixcclxuICAgICAgICAgIGF1dGhvcml6YXRpb246IFwiYmVhcmVyIFwiICsgdGhpcy5sb2dpblNlcnZpY2UubG9hZGRldGFpbCgpLmJhc2ljX1Rva2VuX1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICkucGlwZShtYXAocmVzID0+IHJlcy5qc29uKCkpKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0=