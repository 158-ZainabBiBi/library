import { Injectable } from '@angular/core';
import { HttpcallService } from './httpcall.service';
import * as i0 from "@angular/core";
import * as i1 from "./httpcall.service";
export class GetaddressService {
    constructor(_HttpcallService_) {
        this._HttpcallService_ = _HttpcallService_;
    }
    getByPostcode(postcode) {
        var postData = {
            service_NAME: "GETADDRESS",
            request_TYPE: "GET",
            request_URI: "find/" + postcode + "?api-key=V4QHzniNakGufrLJgB3ROw29270&expand=true",
            request_BODY: ""
        };
        return this._HttpcallService_.api(postData);
    }
}
GetaddressService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GetaddressService_Factory() { return new GetaddressService(i0.ɵɵinject(i1.HttpcallService)); }, token: GetaddressService, providedIn: "root" });
GetaddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GetaddressService.ctorParameters = () => [
    { type: HttpcallService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvc2VydmljZXMvZ2V0YWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFLckQsTUFBTSxPQUFPLGlCQUFpQjtJQUU1QixZQUNVLGlCQUFrQztRQUFsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO0lBQ3hDLENBQUM7SUFFTCxhQUFhLENBQUMsUUFBUTtRQUNwQixJQUFJLFFBQVEsR0FBRztZQUNiLFlBQVksRUFBRSxZQUFZO1lBQzFCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRSxPQUFPLEdBQUcsUUFBUSxHQUFHLGtEQUFrRDtZQUNwRixZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFBO1FBRUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7WUFsQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwY2FsbFNlcnZpY2UgfSBmcm9tICcuL2h0dHBjYWxsLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2V0YWRkcmVzc1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX0h0dHBjYWxsU2VydmljZV86IEh0dHBjYWxsU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIGdldEJ5UG9zdGNvZGUocG9zdGNvZGUpIHtcclxuICAgIHZhciBwb3N0RGF0YSA9IHtcclxuICAgICAgc2VydmljZV9OQU1FOiBcIkdFVEFERFJFU1NcIixcclxuICAgICAgcmVxdWVzdF9UWVBFOiBcIkdFVFwiLFxyXG4gICAgICByZXF1ZXN0X1VSSTogXCJmaW5kL1wiICsgcG9zdGNvZGUgKyBcIj9hcGkta2V5PVY0UUh6bmlOYWtHdWZyTEpnQjNST3cyOTI3MCZleHBhbmQ9dHJ1ZVwiLFxyXG4gICAgICByZXF1ZXN0X0JPRFk6IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fSHR0cGNhbGxTZXJ2aWNlXy5hcGkocG9zdERhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=