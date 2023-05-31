import { Injectable } from '@angular/core';
import { HttpCallServieService } from "./http-call-service.service";
import * as i0 from "@angular/core";
import * as i1 from "./http-call-service.service";
export class GetaddressService {
    constructor(_HttpCallServieService_) {
        this._HttpCallServieService_ = _HttpCallServieService_;
    }
    getByPostcode(postcode) {
        var postData = {
            service_NAME: "GETADDRESS",
            request_TYPE: "GET",
            request_URI: "find/" + postcode + "?api-key=V4QHzniNakGufrLJgB3ROw29270&expand=true",
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
}
GetaddressService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GetaddressService_Factory() { return new GetaddressService(i0.ɵɵinject(i1.HttpCallServieService)); }, token: GetaddressService, providedIn: "root" });
GetaddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GetaddressService.ctorParameters = () => [
    { type: HttpCallServieService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvc2VydmljZXMvZ2V0YWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQUtwRSxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQ1UsdUJBQThDO1FBQTlDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBdUI7SUFDcEQsQ0FBQztJQUVMLGFBQWEsQ0FBQyxRQUFRO1FBQ3BCLElBQUksUUFBUSxHQUFHO1lBQ2IsWUFBWSxFQUFFLFlBQVk7WUFDMUIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLE9BQU8sR0FBRyxRQUFRLEdBQUcsa0RBQWtEO1lBQ3BGLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUE7UUFFRCxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztZQWxCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEh0dHBDYWxsU2VydmllU2VydmljZSB9IGZyb20gXCIuL2h0dHAtY2FsbC1zZXJ2aWNlLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdldGFkZHJlc3NTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9IdHRwQ2FsbFNlcnZpZVNlcnZpY2VfOiBIdHRwQ2FsbFNlcnZpZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBnZXRCeVBvc3Rjb2RlKHBvc3Rjb2RlKSB7XHJcbiAgICB2YXIgcG9zdERhdGEgPSB7XHJcbiAgICAgIHNlcnZpY2VfTkFNRTogXCJHRVRBRERSRVNTXCIsXHJcbiAgICAgIHJlcXVlc3RfVFlQRTogXCJHRVRcIixcclxuICAgICAgcmVxdWVzdF9VUkk6IFwiZmluZC9cIiArIHBvc3Rjb2RlICsgXCI/YXBpLWtleT1WNFFIem5pTmFrR3VmckxKZ0IzUk93MjkyNzAmZXhwYW5kPXRydWVcIixcclxuICAgICAgcmVxdWVzdF9CT0RZOiBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX0h0dHBDYWxsU2VydmllU2VydmljZV8uYXBpKHBvc3REYXRhKTtcclxuICB9XHJcbn1cclxuIl19