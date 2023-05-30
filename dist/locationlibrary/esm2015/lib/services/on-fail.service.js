import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { LoginService } from '../pages/login/login.service';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
import * as i2 from "../pages/login/login.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tZmFpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvc2VydmljZXMvb24tZmFpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFLNUQsTUFBTSxPQUFPLGFBQWE7SUFFeEIsWUFDVSxRQUF1QixFQUN2QixhQUEyQjtRQUQzQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQ2pDLENBQUM7SUFFTCxNQUFNLENBQUMsTUFBTTtRQUNYLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxlQUFlLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsNENBQTRDLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELE9BQU87U0FDUjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdEQsT0FBTztTQUNSO1FBQ0QsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3RELE9BQU87YUFDUjtpQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3RELE9BQU87YUFDUjtZQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3RELE9BQU87aUJBQ1I7cUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLGVBQWUsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsNENBQTRDLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQ2xGLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzVCLE9BQU87aUJBQ1I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3RELE9BQU87aUJBQ1I7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzVIO1NBQ0Y7YUFBTSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkQsT0FBTztTQUNSO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvRCxPQUFPO1NBQ1I7SUFFSCxDQUFDOzs7O1lBeERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTlEsYUFBYTtZQUViLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5cclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vcGFnZXMvbG9naW4vbG9naW4uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbkZhaWxTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF90b2FzdGVyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBvbkZhaWwoaWZGYWlsKSB7XHJcbiAgICBpZiAoaWZGYWlsLmVycm9yID09IFwiaW52YWxpZF90b2tlblwiKSB7XHJcbiAgICAgIHRoaXMuX3RvYXN0ZXIud2FybmluZyhcIkludGVybmFsIHNlc3Npb24gZXhwaXJlZC4gTG9nZ2VkIGluIGFnYWluIFwiLCBcIkxvZ2dlZCBvdXRcIik7XHJcbiAgICAgIHRoaXMuX2xvZ2luU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlmRmFpbC5zdGF0dXMgPT0gMCkge1xyXG4gICAgICB0aGlzLl90b2FzdGVyLmVycm9yKFwiQ29ubmVjdGlvbiB0aW1lZCBvdXRcIiwgXCJFcnJvclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlmRmFpbC5zdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgIHRoaXMuX3RvYXN0ZXIuZXJyb3IoXCJ1bmtub3duIGVycm9yIG9jY3VyZWRcIiwgXCJFcnJvclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlmRmFpbC5oYXNPd25Qcm9wZXJ0eShcIl9ib2R5XCIpKSB7XHJcbiAgICAgIGxldCBib2R5ID0gSlNPTi5wYXJzZShpZkZhaWwuX2JvZHkpO1xyXG4gICAgICB2YXIgZmFpbCA9IHt9O1xyXG4gICAgICBpZiAoIWlmRmFpbCkge1xyXG4gICAgICAgIHRoaXMuX3RvYXN0ZXIuZXJyb3IoXCJ1bmtub3duIGVycm9yIG9jY3VyZWRcIiwgXCJFcnJvclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSBpZiAoIWlmRmFpbC5fYm9keSkge1xyXG4gICAgICAgIHRoaXMuX3RvYXN0ZXIuZXJyb3IoXCJ1bmtub3duIGVycm9yIG9jY3VyZWRcIiwgXCJFcnJvclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gaWYgKGlmRmFpbC5oYXNPd25Qcm9wZXJ0eShcIl9ib2R5XCIpKSB7XHJcbiAgICAgICAgaWYgKGJvZHkuc3RhdHVzID09IDQwMCkge1xyXG4gICAgICAgICAgdGhpcy5fdG9hc3Rlci5lcnJvcihcInVua25vd24gZXJyb3Igb2NjdXJlZFwiLCBcIkVycm9yXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9keS5lcnJvciA9PSBcImludmFsaWRfdG9rZW5cIikge1xyXG4gICAgICAgICAgdGhpcy5fdG9hc3Rlci53YXJuaW5nKFwiSW50ZXJuYWwgc2Vzc2lvbiBleHBpcmVkLiBMb2dnZWQgaW4gYWdhaW4gXCIsIFwiTG9nZ2VkIG91dFwiKTtcclxuICAgICAgICAgIHRoaXMuX2xvZ2luU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fdG9hc3Rlci5lcnJvcihcInVua25vd24gZXJyb3Igb2NjdXJlZFwiLCBcIkVycm9yXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl90b2FzdGVyLmVycm9yKFwiU3RhdHVzOiBcIiArIGlmRmFpbC5zdGF0dXMgKyBcIiBFcnJvcjogXCIgKyBib2R5LmVycm9yICsgXCIgTWVzc2FnZTogXCIgKyBib2R5LmVycm9yX2Rlc2NyaXB0aW9uLCBcIkVycm9yXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGlmRmFpbC5oYXNPd25Qcm9wZXJ0eShcIm1lc3NhZ2VcIikpIHtcclxuICAgICAgdGhpcy5fdG9hc3Rlci53YXJuaW5nKFwiTWVzc2FnZVwiLCBcIiBcIiArIGlmRmFpbC5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdG9hc3Rlci5lcnJvcihcImNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvblwiLCBcIkVycm9yXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0=