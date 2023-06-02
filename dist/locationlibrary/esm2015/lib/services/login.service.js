import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
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
            localStorage.setItem("LocationManagement", JSON.stringify(user));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xvY2F0aW9ubGlicmFyeS9zcmMvbGliL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFXLE1BQU0sZUFBZSxDQUFBO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7OztBQU0zQyxNQUFNLE9BQU8sWUFBWTtJQUV2QixZQUNVLElBQVUsRUFDVixPQUFlLEVBQ2YsT0FBc0I7UUFGdEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQzVCLENBQUM7SUFNTCxTQUFTLENBQUMsS0FBSztRQUNiLElBQUksS0FBSyxFQUFFO1lBQ1QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsSUFBSTtRQUNiLElBQUksSUFBSSxFQUFFO1lBQ1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNO1FBQ0osWUFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlDLFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsa0NBQWtDLEdBQUcsd0JBQXdCLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztRQUM3RyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNELE1BQU0sK0JBQStCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RSxJQUFJLE9BQU8sSUFBSSwrQkFBK0IsRUFBRTtZQUM5QyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7OztZQTVERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLElBQUk7WUFDSixNQUFNO1lBQ04sYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxuICApIHsgfVxuXG4gIGF1dGhUb2tlbjogYW55O1xuICB1c2VyOiBhbnk7XG4gIHVzZXJJZDogYW55O1xuXG4gIHNhdmVUb2tlbih0b2tlbikge1xuICAgIGlmICh0b2tlbikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NfdG9rZW5cIiwgdG9rZW4pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzYXZlRGV0YWlsKHVzZXIpIHtcbiAgICBpZiAodXNlcikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMb2NhdGlvbk1hbmFnZW1lbnRcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBsb2FkVG9rZW4oKSB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc190b2tlblwiKTtcbiAgICB0aGlzLmF1dGhUb2tlbiA9IHRva2VuO1xuICB9XG5cbiAgbG9hZGRldGFpbCgpIHtcbiAgICBjb25zdCBnZXRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMb2NhdGlvbk1hbmFnZW1lbnRcIik7XG4gICAgdGhpcy51c2VyID0gSlNPTi5wYXJzZShnZXRVc2VyKTtcbiAgICByZXR1cm4gdGhpcy51c2VyO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiTG9jYXRpb25NYW5hZ2VtZW50XCIpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWNjZXNzX3Rva2VuXCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCJodHRwOi8vYWNjb3VudHMua2l0YWFzLmVkdS5way8jL1wiICsgXCJsb2dvdXQ/YXBwbGljYXRpb25fSUQ9XCIgKyBcIkxvY2F0aW9uTWFuYWdlbWVudFwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGxvZ2dlZCgpIHtcbiAgICBjb25zdCBnZXRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMb2NhdGlvbk1hbmFnZW1lbnRcIik7XG4gICAgY29uc3QgX2FwcGxpY2F0aW9uX25hbWVfYWNjZXNzX3Rva2VuXyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzX3Rva2VuXCIpO1xuICAgIGlmIChnZXRVc2VyICYmIF9hcHBsaWNhdGlvbl9uYW1lX2FjY2Vzc190b2tlbl8pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=