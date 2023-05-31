import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { LoginService } from "./login.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/http";
import * as i2 from "./login.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jYWxsLXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xvY2F0aW9ubGlicmFyeS9zcmMvbGliL3NlcnZpY2VzL2h0dHAtY2FsbC1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLL0MsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUNVLElBQVUsRUFDVixZQUEwQjtRQUQxQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFHcEMsWUFBTyxHQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDdEUsWUFBTyxHQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUM7SUFINUQsQ0FBQztJQUtMLEdBQUcsQ0FBQyxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFQUSxJQUFJO1lBR0osWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwQ2FsbFNlcnZpZVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cCxcclxuICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBCYXNlVXJsOiBhbnkgPSB0aGlzLmxvZ2luU2VydmljZS5sb2FkZGV0YWlsKCkuYXBwbGljYXRpb25zZXJ2aWNlX1BBVEg7XHJcbiAgQXV0aFVybDogYW55ID0gdGhpcy5sb2dpblNlcnZpY2UubG9hZGRldGFpbCgpLm9hdXRoc2VydmljZV9QQVRIO1xyXG5cclxuICBhcGkocG9zdERhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLkJhc2VVcmwgKyBcImFwaWdhdGV3YXlcIiwgcG9zdERhdGEpLnBpcGUobWFwKHJlcyA9PiByZXMuanNvbigpKSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=