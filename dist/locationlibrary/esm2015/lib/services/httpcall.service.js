import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { LoginService } from "./login.service";
import { settings } from "../settings";
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
import * as i2 from "./login.service";
export class HttpcallService {
    constructor(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.BaseUrl = this.loaddetail().applicationservice_PATH;
        this.AuthUrl = this.loaddetail().oauthservice_PATH;
    }
    loaddetail() {
        const getUser = localStorage.getItem(settings.application_ID);
        this.user = JSON.parse(getUser);
        return this.user;
    }
    // BaseUrl: any = this.loginService.loaddetail().applicationservice_PATH;
    // AuthUrl: any = this.loginService.loaddetail().oauthservice_PATH;
    api(postData) {
        return this.http.post(this.BaseUrl + "apigateway", postData).pipe(map(res => res.json()));
    }
}
HttpcallService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpcallService_Factory() { return new HttpcallService(i0.ɵɵinject(i1.Http), i0.ɵɵinject(i2.LoginService)); }, token: HttpcallService, providedIn: "root" });
HttpcallService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
HttpcallService.ctorParameters = () => [
    { type: Http },
    { type: LoginService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cGNhbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xvY2F0aW9ubGlicmFyeS9zcmMvbGliL3NlcnZpY2VzL2h0dHBjYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sZUFBZTtJQUUzQixZQUNXLElBQVUsRUFDVixZQUEwQjtRQUQxQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFhcEMsWUFBTyxHQUFRLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztRQUN6RCxZQUFPLEdBQVEsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lBYi9DLENBQUM7SUFNTCxVQUFVO1FBQ1IsTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBS0QseUVBQXlFO0lBQ3pFLG1FQUFtRTtJQUVuRSxHQUFHLENBQUMsUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7OztZQTVCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVJRLElBQUk7WUFHSixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIdHRwY2FsbFNlcnZpY2Uge1xuXG4gY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2VcbiAgKSB7IH1cblxuICBhdXRoVG9rZW46IGFueTtcbiAgdXNlcjogYW55O1xuICB1c2VySWQ6IGFueTtcblxuICBsb2FkZGV0YWlsKCkge1xuICAgIGNvbnN0IGdldFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5ncy5hcHBsaWNhdGlvbl9JRCk7XG4gICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShnZXRVc2VyKTtcbiAgICByZXR1cm4gdGhpcy51c2VyO1xuICB9XG5cbiAgQmFzZVVybDogYW55ID0gdGhpcy5sb2FkZGV0YWlsKCkuYXBwbGljYXRpb25zZXJ2aWNlX1BBVEg7XG4gIEF1dGhVcmw6IGFueSA9IHRoaXMubG9hZGRldGFpbCgpLm9hdXRoc2VydmljZV9QQVRIO1xuXG4gIC8vIEJhc2VVcmw6IGFueSA9IHRoaXMubG9naW5TZXJ2aWNlLmxvYWRkZXRhaWwoKS5hcHBsaWNhdGlvbnNlcnZpY2VfUEFUSDtcbiAgLy8gQXV0aFVybDogYW55ID0gdGhpcy5sb2dpblNlcnZpY2UubG9hZGRldGFpbCgpLm9hdXRoc2VydmljZV9QQVRIO1xuXG4gIGFwaShwb3N0RGF0YSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLkJhc2VVcmwgKyBcImFwaWdhdGV3YXlcIiwgcG9zdERhdGEpLnBpcGUobWFwKHJlcyA9PiByZXMuanNvbigpKSk7XG4gIH1cblxufVxuIl19