import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { LoginService } from "./login.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
import * as i2 from "./login.service";
export class HttpcallService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cGNhbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xvY2F0aW9ubGlicmFyeS9zcmMvbGliL3NlcnZpY2VzL2h0dHBjYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLL0MsTUFBTSxPQUFPLGVBQWU7SUFFMUIsWUFDVSxJQUFVLEVBQ1YsWUFBMEI7UUFEMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBR3BDLFlBQU8sR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ3RFLFlBQU8sR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lBSDVELENBQUM7SUFLTCxHQUFHLENBQUMsUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7OztZQWZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTlEsSUFBSTtZQUVKLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBjYWxsU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2VcbiAgKSB7IH1cblxuICBCYXNlVXJsOiBhbnkgPSB0aGlzLmxvZ2luU2VydmljZS5sb2FkZGV0YWlsKCkuYXBwbGljYXRpb25zZXJ2aWNlX1BBVEg7XG4gIEF1dGhVcmw6IGFueSA9IHRoaXMubG9naW5TZXJ2aWNlLmxvYWRkZXRhaWwoKS5vYXV0aHNlcnZpY2VfUEFUSDtcblxuICBhcGkocG9zdERhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5CYXNlVXJsICsgXCJhcGlnYXRld2F5XCIsIHBvc3REYXRhKS5waXBlKG1hcChyZXMgPT4gcmVzLmpzb24oKSkpO1xuICB9XG59XG4iXX0=