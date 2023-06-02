import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocationleveltypeService } from './locationleveltype.service';
import { OnfailService } from '../../services/onfail.service';
export class LocationleveltypeComponent {
    constructor(locationleveltypeservice, toastrservice, onfailservice) {
        this.locationleveltypeservice = locationleveltypeservice;
        this.toastrservice = toastrservice;
        this.onfailservice = onfailservice;
        this.iscompulsory = false;
        this.disabled = false;
        this.all = false;
        this.locationleveltypeID = null;
        this.locationleveltypes = [];
    }
    ngOnInit() {
        this.locationleveltypes = JSON.parse(window.sessionStorage.getItem('locationleveltypes'));
        if (this.locationleveltypes == null) {
            this.locationleveltypeGet();
        }
        if (!this.locationleveltypeID && Number(window.sessionStorage.getItem('locationleveltype')) > 0) {
            this.locationleveltypeID = Number(window.sessionStorage.getItem('locationleveltype'));
        }
        if (this.locationleveltypeID) {
            window.sessionStorage.setItem("locationleveltype", this.locationleveltypeID);
        }
    }
    setLocationType(response) {
        this.locationleveltypes = response;
        window.sessionStorage.setItem("locationleveltypes", JSON.stringify(this.locationleveltypes));
    }
    locationleveltypeGet() {
        this.locationleveltypeservice.lookup("LOCATIONLEVELTYPE").subscribe(response => {
            if (response) {
                if (response.error && response.status) {
                    this.toastrservice.warning("Message", " " + response.message);
                }
                else {
                    this.setLocationType(response);
                }
            }
        }, error => {
            this.onfailservice.onFail(error);
        });
    }
}
LocationleveltypeComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-locationleveltype',
                template: "<div class=\"form-group\">\r\n    <label class=\"custom-label form-label\">Location Level Type\r\n        <span style=\"color: red;\" [hidden]=\"disabled\" *ngIf=\"iscompulsory==true\">*</span>\r\n    </label>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <ng-select [(ngModel)]=\"locationleveltypeID\" [disabled]=\"disabled\" name=\"locationleveltypeID\" maxlength=\"50\">\r\n                <ng-option *ngFor=\"let locationleveltype of locationleveltypes\" [value]=\"locationleveltype.id\" [disabled]=\"disabled\">\r\n                    {{ locationleveltype.code }} - {{ locationleveltype.description }}\r\n                </ng-option>\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn btn-light ml-2\" [hidden]=\"disabled\" (click)=\"locationleveltypeGet()\">\r\n                <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                styles: [""]
            },] }
];
LocationleveltypeComponent.ctorParameters = () => [
    { type: LocationleveltypeService },
    { type: ToastrService },
    { type: OnfailService }
];
LocationleveltypeComponent.propDecorators = {
    iscompulsory: [{ type: Input }],
    disabled: [{ type: Input }],
    all: [{ type: Input }],
    locationleveltypeID: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25sZXZlbHR5cGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9sb2NhdGlvbmxldmVsdHlwZS9sb2NhdGlvbmxldmVsdHlwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTzlELE1BQU0sT0FBTywwQkFBMEI7SUFZckMsWUFDVSx3QkFBa0QsRUFDbEQsYUFBNEIsRUFDNUIsYUFBNEI7UUFGNUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWJ0QyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFFckIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBRTNCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztJQU1wQixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7WUFDbkMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFO1lBQzdGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1NBQ3ZGO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDOUU7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLFFBQVE7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztRQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdFLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDL0Q7cUJBQUs7b0JBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDaEM7YUFDRjtRQUNILENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNULElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQywwZ0NBQWlEOzthQUVsRDs7O1lBUFEsd0JBQXdCO1lBRnhCLGFBQWE7WUFHYixhQUFhOzs7MkJBUW5CLEtBQUs7dUJBRUwsS0FBSztrQkFFTCxLQUFLO2tDQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcclxuXHJcbmltcG9ydCB7IExvY2F0aW9ubGV2ZWx0eXBlU2VydmljZSB9IGZyb20gJy4vbG9jYXRpb25sZXZlbHR5cGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE9uZmFpbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vbmZhaWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2NhdGlvbmxldmVsdHlwZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2F0aW9ubGV2ZWx0eXBlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2NhdGlvbmxldmVsdHlwZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2F0aW9ubGV2ZWx0eXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGlzY29tcHVsc29yeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIGFsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbG9jYXRpb25sZXZlbHR5cGVJRCA9IG51bGw7XHJcblxyXG4gIGxvY2F0aW9ubGV2ZWx0eXBlcyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9jYXRpb25sZXZlbHR5cGVzZXJ2aWNlOiBMb2NhdGlvbmxldmVsdHlwZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRvYXN0cnNlcnZpY2U6IFRvYXN0clNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG9uZmFpbHNlcnZpY2U6IE9uZmFpbFNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlcyA9IEpTT04ucGFyc2Uod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9ubGV2ZWx0eXBlcycpKTtcclxuICAgIGlmICh0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlcyA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb25sZXZlbHR5cGVHZXQoKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5sb2NhdGlvbmxldmVsdHlwZUlEICYmIE51bWJlcih3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb25sZXZlbHR5cGUnKSk+MCkge1xyXG4gICAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlSUQgPSBOdW1iZXIod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9ubGV2ZWx0eXBlJykpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubG9jYXRpb25sZXZlbHR5cGVJRCkge1xyXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2F0aW9ubGV2ZWx0eXBlXCIsIHRoaXMubG9jYXRpb25sZXZlbHR5cGVJRCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRMb2NhdGlvblR5cGUocmVzcG9uc2UpIHtcclxuICAgIHRoaXMubG9jYXRpb25sZXZlbHR5cGVzID0gcmVzcG9uc2U7XHJcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2F0aW9ubGV2ZWx0eXBlc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlcykpO1xyXG4gIH1cclxuXHJcbiAgbG9jYXRpb25sZXZlbHR5cGVHZXQoKXtcclxuICAgIHRoaXMubG9jYXRpb25sZXZlbHR5cGVzZXJ2aWNlLmxvb2t1cChcIkxPQ0FUSU9OTEVWRUxUWVBFXCIpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgIHRoaXMudG9hc3Ryc2VydmljZS53YXJuaW5nKFwiTWVzc2FnZVwiLCBcIiBcIiArIHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2V0TG9jYXRpb25UeXBlKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5vbmZhaWxzZXJ2aWNlLm9uRmFpbChlcnJvcik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn1cclxuIl19