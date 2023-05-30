import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { LoginService } from "../pages/login/login.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
import * as i2 from "../pages/login/login.service";
export class HttpCallServieService {
    constructor(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.BaseUrl = this.loginService.loaddetail().applicationservice_PATH;
        this.AuthUrl = this.loginService.loaddetail().oauthservice_PATH;
    }
    api(postData) {
        return this.http.post(this.BaseUrl + "apigateway", postData).pipe(map(res => res.json()));
    }
}
HttpCallServieService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpCallServieService_Factory() { return new HttpCallServieService(i0.ɵɵinject(i1.Http), i0.ɵɵinject(i2.LoginService)); }, token: HttpCallServieService, providedIn: "root" });
HttpCallServieService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
HttpCallServieService.ctorParameters = () => [
    { type: Http },
    { type: LoginService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jYWxsLXNlcnZpZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvc2VydmljZXMvaHR0cC1jYWxsLXNlcnZpZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsR0FBRyxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBSzVELE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFDVSxJQUFVLEVBQ1YsWUFBMEI7UUFEMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBR3BDLFlBQU8sR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ3RFLFlBQU8sR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lBSDVELENBQUM7SUFLTCxHQUFHLENBQUMsUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7OztZQWZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsSUFBSTtZQUdKLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3BhZ2VzL2xvZ2luL2xvZ2luLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBDYWxsU2VydmllU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxyXG4gICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIEJhc2VVcmw6IGFueSA9IHRoaXMubG9naW5TZXJ2aWNlLmxvYWRkZXRhaWwoKS5hcHBsaWNhdGlvbnNlcnZpY2VfUEFUSDtcclxuICBBdXRoVXJsOiBhbnkgPSB0aGlzLmxvZ2luU2VydmljZS5sb2FkZGV0YWlsKCkub2F1dGhzZXJ2aWNlX1BBVEg7XHJcblxyXG4gIGFwaShwb3N0RGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuQmFzZVVybCArIFwiYXBpZ2F0ZXdheVwiLCBwb3N0RGF0YSkucGlwZShtYXAocmVzID0+IHJlcy5qc29uKCkpKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=