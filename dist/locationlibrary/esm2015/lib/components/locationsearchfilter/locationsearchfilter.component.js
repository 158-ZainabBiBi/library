import { Component, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocationleveltypeService } from '../locationleveltype/locationleveltype.service';
import { LocationComponent } from '../location/location.component';
import { OnfailService } from '../../services/onfail.service';
export class LocationsearchfilterComponent {
    constructor(locationleveltypeservice, toastrservice, onfailservice) {
        this.locationleveltypeservice = locationleveltypeservice;
        this.toastrservice = toastrservice;
        this.onfailservice = onfailservice;
        this.view = 1;
        this.disabled = false;
        this.issearchfilter = true;
        this.isshowlables = true;
        this.locationtypeID = 10;
        this.locationID = 0;
        this.locationsearchfilterID = 0;
        this.advancedSearch = new EventEmitter();
        this.locationleveltypes = [];
        this.search = {
            locationparent_ID: null
        };
    }
    ngOnInit() {
        this.locationleveltypeGet();
    }
    searchfilter() {
        this.locations.forEach((child) => {
            if (child.locationID != null)
                this.search.locationparent_ID = child.locationID;
        });
        this.advancedSearch.next(this.search);
    }
    searchfilterID() {
        var locationID;
        this.locations.forEach((child) => {
            if (child.locationID != null)
                locationID = child.locationID;
        });
        return locationID;
    }
    reset() {
    }
    setLocation(locations) {
        locations.reverse();
        locations.forEach(location => {
            this.locations.forEach((child) => {
                if (child.locationleveltypeID == location.locationleveltype_ID.id)
                    child.locationID = location.location_ID;
                child.locationGetOne(location.location_ID);
            });
        });
    }
    selectedLocation(location) {
        var found = false;
        this.locations.forEach((child) => {
            if (found == true) {
                child.searchLocation(child.locationleveltypeID, location.location_ID);
                found = false;
                this.locationID = location.location_ID;
            }
            if (child.locationleveltypeID == location.locationleveltype_ID.id)
                found = true;
        });
        this.locationID = location.location_ID;
    }
    locationleveltypeGet() {
        this.locationleveltypeservice.lookup("LOCATIONLEVELTYPE").subscribe(response => {
            if (response) {
                if (response.error && response.status) {
                    this.toastrservice.warning("Message", " " + response.message);
                }
                else {
                    response[0].locationparentID = null;
                    this.locationleveltypes.push(response[0]);
                    for (var a = 1; a < response.length; a++) {
                        response[a].locationparentID = -1;
                        if (response[a].code <= this.locationtypeID)
                            this.locationleveltypes.push(response[a]);
                    }
                    //          this.locationleveltypes = response;
                }
            }
        }, error => {
            this.onfailservice.onFail(error);
        });
    }
}
LocationsearchfilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-locationsearchfilter',
                template: "<div *ngIf=\"view==1\" class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card-primary card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"align-items-center row\">\r\n                    <div class=\"col\">\r\n                        <a href=\"javascript:void\" aria-controls=\"collapse-customerinfo1\" aria-expanded=\"true\"\r\n                            class=\"card-title\">Filter\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\" *ngFor=\"let locationleveltype of locationleveltypes\">\r\n                        <app-location #locations [view]=\"6\" [locationleveltypeID]=\"locationleveltype.id\"\r\n                            [locationparentID]=\"locationleveltype.locationparentID\"\r\n                            (selectedLocation)=\"selectedLocation($event)\"></app-location>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"issearchfilter==true\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group text-right\">\r\n                            <button id=\"savebutton\" class=\"btn btn-success ml-2\" (click)=\"searchfilter()\">\r\n                                Search\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-light ml-2\" (click)=\"reset()\">\r\n                                Reset\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==2\" class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\" *ngFor=\"let locationleveltype of locationleveltypes\">\r\n                <app-location #locations [view]=\"6\" [disabled]='disabled' [locationleveltypeID]=\"locationleveltype.id\"\r\n                    [locationparentID]=\"locationleveltype.locationparentID\"\r\n                    (selectedLocation)=\"selectedLocation($event)\"></app-location>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==3\" class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\" *ngFor=\"let locationleveltype of locationleveltypes\">\r\n                <app-location #locations [view]=\"6\" [disabled]='disabled' [locationleveltypeID]=\"locationleveltype.id\"\r\n                    [locationparentID]=\"locationleveltype.locationparentID\"\r\n                    (selectedLocation)=\"selectedLocation($event)\"></app-location>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==4\" class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\" *ngFor=\"let locationleveltype of locationleveltypes\">\r\n                <app-location #locations [view]=\"6\" [disabled]='disabled' [isshowlables]=\"isshowlables\" [locationleveltypeID]=\"locationleveltype.id\"\r\n                    [locationparentID]=\"locationleveltype.locationparentID\"\r\n                    (selectedLocation)=\"selectedLocation($event)\"></app-location>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                styles: [""]
            },] }
];
LocationsearchfilterComponent.ctorParameters = () => [
    { type: LocationleveltypeService },
    { type: ToastrService },
    { type: OnfailService }
];
LocationsearchfilterComponent.propDecorators = {
    locations: [{ type: ViewChildren, args: [LocationComponent,] }],
    baseURL: [{ type: Input }],
    view: [{ type: Input }],
    disabled: [{ type: Input }],
    issearchfilter: [{ type: Input }],
    isshowlables: [{ type: Input }],
    locationtypeID: [{ type: Input }],
    locationID: [{ type: Input }],
    locationsearchfilterID: [{ type: Input }],
    advancedSearch: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25zZWFyY2hmaWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9sb2NhdGlvbnNlYXJjaGZpbHRlci9sb2NhdGlvbnNlYXJjaGZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPOUQsTUFBTSxPQUFPLDZCQUE2QjtJQTRCeEMsWUFDVSx3QkFBa0QsRUFDbEQsYUFBNEIsRUFDNUIsYUFBNEI7UUFGNUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXpCdEMsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRTVCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsMkJBQXNCLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5Qyx1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFFeEIsV0FBTSxHQUFH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RyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ3hDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjOzRCQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3QztvQkFFRCwrQ0FBK0M7aUJBQ2hEO2FBQ0Y7UUFDSCxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7OztZQTdHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMscTlHQUFvRDs7YUFFckQ7OztZQVJRLHdCQUF3QjtZQUZ4QixhQUFhO1lBSWIsYUFBYTs7O3dCQVFuQixZQUFZLFNBQUMsaUJBQWlCO3NCQUU5QixLQUFLO21CQUVMLEtBQUs7dUJBRUwsS0FBSzs2QkFFTCxLQUFLOzJCQUVMLEtBQUs7NkJBRUwsS0FBSzt5QkFFTCxLQUFLO3FDQUVMLEtBQUs7NkJBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xyXG5cclxuaW1wb3J0IHsgTG9jYXRpb25sZXZlbHR5cGVTZXJ2aWNlIH0gZnJvbSAnLi4vbG9jYXRpb25sZXZlbHR5cGUvbG9jYXRpb25sZXZlbHR5cGUuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25mYWlsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29uZmFpbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxvY2F0aW9uc2VhcmNoZmlsdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9jYXRpb25zZWFyY2hmaWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvY2F0aW9uc2VhcmNoZmlsdGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25zZWFyY2hmaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGRyZW4oTG9jYXRpb25Db21wb25lbnQpIGxvY2F0aW9uczogUXVlcnlMaXN0PExvY2F0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KClcclxuICBiYXNlVVJMOiBTdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB2aWV3OiBudW1iZXIgPSAxO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIGlzc2VhcmNoZmlsdGVyOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIGlzc2hvd2xhYmxlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBsb2NhdGlvbnR5cGVJRDogbnVtYmVyID0gMTA7XHJcbiAgQElucHV0KClcclxuICBsb2NhdGlvbklEOiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpXHJcbiAgbG9jYXRpb25zZWFyY2hmaWx0ZXJJRDogbnVtYmVyID0gMDtcclxuXHJcbiAgQE91dHB1dCgpIGFkdmFuY2VkU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBsb2NhdGlvbmxldmVsdHlwZXMgPSBbXTtcclxuXHJcbiAgc2VhcmNoID0ge1xyXG4gICAgbG9jYXRpb25wYXJlbnRfSUQ6IG51bGxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9jYXRpb25sZXZlbHR5cGVzZXJ2aWNlOiBMb2NhdGlvbmxldmVsdHlwZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRvYXN0cnNlcnZpY2U6IFRvYXN0clNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG9uZmFpbHNlcnZpY2U6IE9uZmFpbFNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlR2V0KCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hmaWx0ZXIoKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9ucy5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICBpZiAoY2hpbGQubG9jYXRpb25JRCAhPSBudWxsKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoLmxvY2F0aW9ucGFyZW50X0lEID0gY2hpbGQubG9jYXRpb25JRDtcclxuICAgIH0pXHJcbiAgICB0aGlzLmFkdmFuY2VkU2VhcmNoLm5leHQodGhpcy5zZWFyY2gpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoZmlsdGVySUQoKSB7XHJcbiAgICB2YXIgbG9jYXRpb25JRDtcclxuICAgIHRoaXMubG9jYXRpb25zLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgIGlmIChjaGlsZC5sb2NhdGlvbklEICE9IG51bGwpXHJcbiAgICAgICAgbG9jYXRpb25JRCA9IGNoaWxkLmxvY2F0aW9uSUQ7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGxvY2F0aW9uSUQ7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICB9XHJcblxyXG4gIHNldExvY2F0aW9uKGxvY2F0aW9ucykge1xyXG4gICAgbG9jYXRpb25zLnJldmVyc2UoKTtcclxuICAgIGxvY2F0aW9ucy5mb3JFYWNoKGxvY2F0aW9uID0+IHtcclxuICAgICAgdGhpcy5sb2NhdGlvbnMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBpZiAoY2hpbGQubG9jYXRpb25sZXZlbHR5cGVJRCA9PSBsb2NhdGlvbi5sb2NhdGlvbmxldmVsdHlwZV9JRC5pZClcclxuICAgICAgICAgIGNoaWxkLmxvY2F0aW9uSUQgPSBsb2NhdGlvbi5sb2NhdGlvbl9JRDtcclxuICAgICAgICBjaGlsZC5sb2NhdGlvbkdldE9uZShsb2NhdGlvbi5sb2NhdGlvbl9JRCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkTG9jYXRpb24obG9jYXRpb24pIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5sb2NhdGlvbnMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgaWYgKGZvdW5kID09IHRydWUpIHtcclxuICAgICAgICBjaGlsZC5zZWFyY2hMb2NhdGlvbihjaGlsZC5sb2NhdGlvbmxldmVsdHlwZUlELCBsb2NhdGlvbi5sb2NhdGlvbl9JRCk7XHJcbiAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uSUQgPSBsb2NhdGlvbi5sb2NhdGlvbl9JRDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNoaWxkLmxvY2F0aW9ubGV2ZWx0eXBlSUQgPT0gbG9jYXRpb24ubG9jYXRpb25sZXZlbHR5cGVfSUQuaWQpXHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgfSlcclxuICAgIHRoaXMubG9jYXRpb25JRCA9IGxvY2F0aW9uLmxvY2F0aW9uX0lEO1xyXG4gIH1cclxuXHJcbiAgbG9jYXRpb25sZXZlbHR5cGVHZXQoKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlc2VydmljZS5sb29rdXAoXCJMT0NBVElPTkxFVkVMVFlQRVwiKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IgJiYgcmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0cnNlcnZpY2Uud2FybmluZyhcIk1lc3NhZ2VcIiwgXCIgXCIgKyByZXNwb25zZS5tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzcG9uc2VbMF0ubG9jYXRpb25wYXJlbnRJRCA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlcy5wdXNoKHJlc3BvbnNlWzBdKTtcclxuICAgICAgICAgIGZvciAodmFyIGEgPSAxOyBhIDwgcmVzcG9uc2UubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgICAgcmVzcG9uc2VbYV0ubG9jYXRpb25wYXJlbnRJRCA9IC0xO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VbYV0uY29kZSA8PSB0aGlzLmxvY2F0aW9udHlwZUlEKVxyXG4gICAgICAgICAgICAgIHRoaXMubG9jYXRpb25sZXZlbHR5cGVzLnB1c2gocmVzcG9uc2VbYV0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vICAgICAgICAgIHRoaXMubG9jYXRpb25sZXZlbHR5cGVzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMub25mYWlsc2VydmljZS5vbkZhaWwoZXJyb3IpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==