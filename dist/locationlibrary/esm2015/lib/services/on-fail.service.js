import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { LoginService } from './login.service';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
import * as i2 from "./login.service";
export class OnFailService {
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
OnFailService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OnFailService_Factory() { return new OnFailService(i0.ɵɵinject(i1.ToastrService), i0.ɵɵinject(i2.LoginService)); }, token: OnFailService, providedIn: "root" });
OnFailService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OnFailService.ctorParameters = () => [
    { type: ToastrService },
    { type: LoginService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tZmFpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvc2VydmljZXMvb24tZmFpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLL0MsTUFBTSxPQUFPLGFBQWE7SUFFeEIsWUFDVSxRQUF1QixFQUN2QixhQUEyQjtRQUQzQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQ2pDLENBQUM7SUFFTCxNQUFNLENBQUMsTUFBTTtRQUNYLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxlQUFlLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsNENBQTRDLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELE9BQU87U0FDUjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdEQsT0FBTztTQUNSO1FBQ0QsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3RELE9BQU87YUFDUjtpQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3RELE9BQU87YUFDUjtZQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3RELE9BQU87aUJBQ1I7cUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLGVBQWUsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsNENBQTRDLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQ2xGLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzVCLE9BQU87aUJBQ1I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3RELE9BQU87aUJBQ1I7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzVIO1NBQ0Y7YUFBTSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkQsT0FBTztTQUNSO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvRCxPQUFPO1NBQ1I7SUFFSCxDQUFDOzs7O1lBeERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTlEsYUFBYTtZQUViLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5cclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9uRmFpbFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3RvYXN0ZXI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG9uRmFpbChpZkZhaWwpIHtcclxuICAgIGlmIChpZkZhaWwuZXJyb3IgPT0gXCJpbnZhbGlkX3Rva2VuXCIpIHtcclxuICAgICAgdGhpcy5fdG9hc3Rlci53YXJuaW5nKFwiSW50ZXJuYWwgc2Vzc2lvbiBleHBpcmVkLiBMb2dnZWQgaW4gYWdhaW4gXCIsIFwiTG9nZ2VkIG91dFwiKTtcclxuICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaWZGYWlsLnN0YXR1cyA9PSAwKSB7XHJcbiAgICAgIHRoaXMuX3RvYXN0ZXIuZXJyb3IoXCJDb25uZWN0aW9uIHRpbWVkIG91dFwiLCBcIkVycm9yXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaWZGYWlsLnN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgdGhpcy5fdG9hc3Rlci5lcnJvcihcInVua25vd24gZXJyb3Igb2NjdXJlZFwiLCBcIkVycm9yXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaWZGYWlsLmhhc093blByb3BlcnR5KFwiX2JvZHlcIikpIHtcclxuICAgICAgbGV0IGJvZHkgPSBKU09OLnBhcnNlKGlmRmFpbC5fYm9keSk7XHJcbiAgICAgIHZhciBmYWlsID0ge307XHJcbiAgICAgIGlmICghaWZGYWlsKSB7XHJcbiAgICAgICAgdGhpcy5fdG9hc3Rlci5lcnJvcihcInVua25vd24gZXJyb3Igb2NjdXJlZFwiLCBcIkVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIGlmICghaWZGYWlsLl9ib2R5KSB7XHJcbiAgICAgICAgdGhpcy5fdG9hc3Rlci5lcnJvcihcInVua25vd24gZXJyb3Igb2NjdXJlZFwiLCBcIkVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBpZiAoaWZGYWlsLmhhc093blByb3BlcnR5KFwiX2JvZHlcIikpIHtcclxuICAgICAgICBpZiAoYm9keS5zdGF0dXMgPT0gNDAwKSB7XHJcbiAgICAgICAgICB0aGlzLl90b2FzdGVyLmVycm9yKFwidW5rbm93biBlcnJvciBvY2N1cmVkXCIsIFwiRXJyb3JcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChib2R5LmVycm9yID09IFwiaW52YWxpZF90b2tlblwiKSB7XHJcbiAgICAgICAgICB0aGlzLl90b2FzdGVyLndhcm5pbmcoXCJJbnRlcm5hbCBzZXNzaW9uIGV4cGlyZWQuIExvZ2dlZCBpbiBhZ2FpbiBcIiwgXCJMb2dnZWQgb3V0XCIpO1xyXG4gICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl90b2FzdGVyLmVycm9yKFwidW5rbm93biBlcnJvciBvY2N1cmVkXCIsIFwiRXJyb3JcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3RvYXN0ZXIuZXJyb3IoXCJTdGF0dXM6IFwiICsgaWZGYWlsLnN0YXR1cyArIFwiIEVycm9yOiBcIiArIGJvZHkuZXJyb3IgKyBcIiBNZXNzYWdlOiBcIiArIGJvZHkuZXJyb3JfZGVzY3JpcHRpb24sIFwiRXJyb3JcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaWZGYWlsLmhhc093blByb3BlcnR5KFwibWVzc2FnZVwiKSkge1xyXG4gICAgICB0aGlzLl90b2FzdGVyLndhcm5pbmcoXCJNZXNzYWdlXCIsIFwiIFwiICsgaWZGYWlsLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl90b2FzdGVyLmVycm9yKFwiY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uXCIsIFwiRXJyb3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==