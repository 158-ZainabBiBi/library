import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { LoginService } from './login.service';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
import * as i2 from "./login.service";
export class OnfailService {
    constructor(_toaster, _loginService) {
        this._toaster = _toaster;
        this._loginService = _loginService;
    }
    onFail(ifFail) {
        if (ifFail.error == "invalid_token") {
            this._toaster.warning("Internal session expired. Logged in again ", "Logged out");
            this._loginService.logout();
            return;
        }
        if (ifFail.status == 0) {
            this._toaster.error("Connection timed out", "Error");
            return;
        }
        if (ifFail.status == 404) {
            this._toaster.error("unknown error occured", "Error");
            return;
        }
        if (ifFail.hasOwnProperty("_body")) {
            let body = JSON.parse(ifFail._body);
            var fail = {};
            if (!ifFail) {
                this._toaster.error("unknown error occured", "Error");
                return;
            }
            else if (!ifFail._body) {
                this._toaster.error("unknown error occured", "Error");
                return;
            }
            if (ifFail.hasOwnProperty("_body")) {
                if (body.status == 400) {
                    this._toaster.error("unknown error occured", "Error");
                    return;
                }
                else if (body.error == "invalid_token") {
                    this._toaster.warning("Internal session expired. Logged in again ", "Logged out");
                    this._loginService.logout();
                    return;
                }
                else {
                    this._toaster.error("unknown error occured", "Error");
                    return;
                }
            }
            else {
                this._toaster.error("Status: " + ifFail.status + " Error: " + body.error + " Message: " + body.error_description, "Error");
            }
        }
        else if (ifFail.hasOwnProperty("message")) {
            this._toaster.warning("Message", " " + ifFail.message);
            return;
        }
        else {
            this._toaster.error("check your internet connection", "Error");
            return;
        }
    }
}
OnfailService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OnfailService_Factory() { return new OnfailService(i0.ɵɵinject(i1.ToastrService), i0.ɵɵinject(i2.LoginService)); }, token: OnfailService, providedIn: "root" });
OnfailService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OnfailService.ctorParameters = () => [
    { type: ToastrService },
    { type: LoginService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25mYWlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9sb2NhdGlvbmxpYnJhcnkvc3JjL2xpYi9zZXJ2aWNlcy9vbmZhaWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSy9DLE1BQU0sT0FBTyxhQUFhO0lBRXhCLFlBQ1UsUUFBdUIsRUFDdkIsYUFBMkI7UUFEM0IsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUNqQyxDQUFDO0lBRUwsTUFBTSxDQUFDLE1BQU07UUFDWCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksZUFBZSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLDRDQUE0QyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNyRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDUjtRQUNELElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN0RCxPQUFPO2FBQ1I7aUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN0RCxPQUFPO2FBQ1I7WUFBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN0RCxPQUFPO2lCQUNSO3FCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxlQUFlLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLDRDQUE0QyxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNsRixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM1QixPQUFPO2lCQUNSO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN0RCxPQUFPO2lCQUNSO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUM1SDtTQUNGO2FBQU0sSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZELE9BQU87U0FDUjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDL0QsT0FBTztTQUNSO0lBRUgsQ0FBQzs7OztZQXhERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUxRLGFBQWE7WUFDYixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPbmZhaWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90b2FzdGVyOiBUb2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlXG4gICkgeyB9XG5cbiAgb25GYWlsKGlmRmFpbCkge1xuICAgIGlmIChpZkZhaWwuZXJyb3IgPT0gXCJpbnZhbGlkX3Rva2VuXCIpIHtcbiAgICAgIHRoaXMuX3RvYXN0ZXIud2FybmluZyhcIkludGVybmFsIHNlc3Npb24gZXhwaXJlZC4gTG9nZ2VkIGluIGFnYWluIFwiLCBcIkxvZ2dlZCBvdXRcIik7XG4gICAgICB0aGlzLl9sb2dpblNlcnZpY2UubG9nb3V0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpZkZhaWwuc3RhdHVzID09IDApIHtcbiAgICAgIHRoaXMuX3RvYXN0ZXIuZXJyb3IoXCJDb25uZWN0aW9uIHRpbWVkIG91dFwiLCBcIkVycm9yXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaWZGYWlsLnN0YXR1cyA9PSA0MDQpIHtcbiAgICAgIHRoaXMuX3RvYXN0ZXIuZXJyb3IoXCJ1bmtub3duIGVycm9yIG9jY3VyZWRcIiwgXCJFcnJvclwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlmRmFpbC5oYXNPd25Qcm9wZXJ0eShcIl9ib2R5XCIpKSB7XG4gICAgICBsZXQgYm9keSA9IEpTT04ucGFyc2UoaWZGYWlsLl9ib2R5KTtcbiAgICAgIHZhciBmYWlsID0ge307XG4gICAgICBpZiAoIWlmRmFpbCkge1xuICAgICAgICB0aGlzLl90b2FzdGVyLmVycm9yKFwidW5rbm93biBlcnJvciBvY2N1cmVkXCIsIFwiRXJyb3JcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoIWlmRmFpbC5fYm9keSkge1xuICAgICAgICB0aGlzLl90b2FzdGVyLmVycm9yKFwidW5rbm93biBlcnJvciBvY2N1cmVkXCIsIFwiRXJyb3JcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gaWYgKGlmRmFpbC5oYXNPd25Qcm9wZXJ0eShcIl9ib2R5XCIpKSB7XG4gICAgICAgIGlmIChib2R5LnN0YXR1cyA9PSA0MDApIHtcbiAgICAgICAgICB0aGlzLl90b2FzdGVyLmVycm9yKFwidW5rbm93biBlcnJvciBvY2N1cmVkXCIsIFwiRXJyb3JcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGJvZHkuZXJyb3IgPT0gXCJpbnZhbGlkX3Rva2VuXCIpIHtcbiAgICAgICAgICB0aGlzLl90b2FzdGVyLndhcm5pbmcoXCJJbnRlcm5hbCBzZXNzaW9uIGV4cGlyZWQuIExvZ2dlZCBpbiBhZ2FpbiBcIiwgXCJMb2dnZWQgb3V0XCIpO1xuICAgICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fdG9hc3Rlci5lcnJvcihcInVua25vd24gZXJyb3Igb2NjdXJlZFwiLCBcIkVycm9yXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdG9hc3Rlci5lcnJvcihcIlN0YXR1czogXCIgKyBpZkZhaWwuc3RhdHVzICsgXCIgRXJyb3I6IFwiICsgYm9keS5lcnJvciArIFwiIE1lc3NhZ2U6IFwiICsgYm9keS5lcnJvcl9kZXNjcmlwdGlvbiwgXCJFcnJvclwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlmRmFpbC5oYXNPd25Qcm9wZXJ0eShcIm1lc3NhZ2VcIikpIHtcbiAgICAgIHRoaXMuX3RvYXN0ZXIud2FybmluZyhcIk1lc3NhZ2VcIiwgXCIgXCIgKyBpZkZhaWwubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RvYXN0ZXIuZXJyb3IoXCJjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb25cIiwgXCJFcnJvclwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgfVxufVxuIl19