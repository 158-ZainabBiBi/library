import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OnFailService } from '../../services/on-fail.service';
import { LocationleveltypeService } from './locationleveltype.service';
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
    { type: OnFailService }
];
LocationleveltypeComponent.propDecorators = {
    iscompulsory: [{ type: Input }],
    disabled: [{ type: Input }],
    all: [{ type: Input }],
    locationleveltypeID: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25sZXZlbHR5cGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9sb2NhdGlvbmxldmVsdHlwZS9sb2NhdGlvbmxldmVsdHlwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBT3ZFLE1BQU0sT0FBTywwQkFBMEI7SUFZckMsWUFDVSx3QkFBa0QsRUFDbEQsYUFBNEIsRUFDNUIsYUFBNEI7UUFGNUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWJ0QyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFFckIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBRTNCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztJQU1wQixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7WUFDbkMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFO1lBQzdGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1NBQ3ZGO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDOUU7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLFFBQVE7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztRQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdFLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDL0Q7cUJBQUs7b0JBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDaEM7YUFDRjtRQUNILENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNULElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQywwZ0NBQWlEOzthQUVsRDs7O1lBTlEsd0JBQXdCO1lBSHhCLGFBQWE7WUFFYixhQUFhOzs7MkJBU25CLEtBQUs7dUJBRUwsS0FBSztrQkFFTCxLQUFLO2tDQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcclxuXHJcbmltcG9ydCB7IE9uRmFpbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vbi1mYWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbmxldmVsdHlwZVNlcnZpY2UgfSBmcm9tICcuL2xvY2F0aW9ubGV2ZWx0eXBlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9jYXRpb25sZXZlbHR5cGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2NhdGlvbmxldmVsdHlwZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9jYXRpb25sZXZlbHR5cGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbmxldmVsdHlwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBpc2NvbXB1bHNvcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBhbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIGxvY2F0aW9ubGV2ZWx0eXBlSUQgPSBudWxsO1xyXG5cclxuICBsb2NhdGlvbmxldmVsdHlwZXMgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvY2F0aW9ubGV2ZWx0eXBlc2VydmljZTogTG9jYXRpb25sZXZlbHR5cGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0b2FzdHJzZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvbmZhaWxzZXJ2aWNlOiBPbkZhaWxTZXJ2aWNlLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2NhdGlvbmxldmVsdHlwZXMgPSBKU09OLnBhcnNlKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbmxldmVsdHlwZXMnKSk7XHJcbiAgICBpZiAodGhpcy5sb2NhdGlvbmxldmVsdHlwZXMgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlR2V0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMubG9jYXRpb25sZXZlbHR5cGVJRCAmJiBOdW1iZXIod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9ubGV2ZWx0eXBlJykpPjApIHtcclxuICAgICAgdGhpcy5sb2NhdGlvbmxldmVsdHlwZUlEID0gTnVtYmVyKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbmxldmVsdHlwZScpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlSUQpIHtcclxuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhdGlvbmxldmVsdHlwZVwiLCB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlSUQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TG9jYXRpb25UeXBlKHJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlcyA9IHJlc3BvbnNlO1xyXG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhdGlvbmxldmVsdHlwZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5sb2NhdGlvbmxldmVsdHlwZXMpKTtcclxuICB9XHJcblxyXG4gIGxvY2F0aW9ubGV2ZWx0eXBlR2V0KCl7XHJcbiAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlc2VydmljZS5sb29rdXAoXCJMT0NBVElPTkxFVkVMVFlQRVwiKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IgJiYgcmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0cnNlcnZpY2Uud2FybmluZyhcIk1lc3NhZ2VcIiwgXCIgXCIgKyByZXNwb25zZS5tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNldExvY2F0aW9uVHlwZShyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMub25mYWlsc2VydmljZS5vbkZhaWwoZXJyb3IpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==