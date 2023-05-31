import { Component, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OnFailService } from 'projects/locationlibrary/src/lib/services/on-fail.service';
import { LocationleveltypeService } from '../locationleveltype/locationleveltype.service';
import { LocationComponent } from '../location/location.component';
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
    { type: OnFailService }
];
LocationsearchfilterComponent.propDecorators = {
    locations: [{ type: ViewChildren, args: [LocationComponent,] }],
    view: [{ type: Input }],
    disabled: [{ type: Input }],
    issearchfilter: [{ type: Input }],
    isshowlables: [{ type: Input }],
    locationtypeID: [{ type: Input }],
    locationID: [{ type: Input }],
    locationsearchfilterID: [{ type: Input }],
    advancedSearch: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25zZWFyY2hmaWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9sb2NhdGlvbnNlYXJjaGZpbHRlci9sb2NhdGlvbnNlYXJjaGZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDMUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFMUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFPbkUsTUFBTSxPQUFPLDZCQUE2QjtJQTBCeEMsWUFDVSx3QkFBa0QsRUFDbEQsYUFBNEIsRUFDNUIsYUFBNEI7UUFGNUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXpCdEMsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRTVCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsMkJBQXNCLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5Qyx1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFFeEIsV0FBTSxHQUFH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RyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ3hDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjOzRCQUMzQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUMzQztvQkFFWCwrQ0FBK0M7aUJBQ3RDO2FBQ0Y7UUFDSCxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7OztZQTNHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMscTlHQUFvRDs7YUFFckQ7OztZQVJRLHdCQUF3QjtZQUh4QixhQUFhO1lBRWIsYUFBYTs7O3dCQVduQixZQUFZLFNBQUMsaUJBQWlCO21CQUU5QixLQUFLO3VCQUVMLEtBQUs7NkJBRUwsS0FBSzsyQkFFTCxLQUFLOzZCQUVMLEtBQUs7eUJBRUwsS0FBSztxQ0FFTCxLQUFLOzZCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcclxuXHJcbmltcG9ydCB7IE9uRmFpbFNlcnZpY2UgfSBmcm9tICdwcm9qZWN0cy9sb2NhdGlvbmxpYnJhcnkvc3JjL2xpYi9zZXJ2aWNlcy9vbi1mYWlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbmxldmVsdHlwZVNlcnZpY2UgfSBmcm9tICcuLi9sb2NhdGlvbmxldmVsdHlwZS9sb2NhdGlvbmxldmVsdHlwZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IExvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxvY2F0aW9uc2VhcmNoZmlsdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9jYXRpb25zZWFyY2hmaWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvY2F0aW9uc2VhcmNoZmlsdGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25zZWFyY2hmaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGRyZW4oTG9jYXRpb25Db21wb25lbnQpIGxvY2F0aW9uczogUXVlcnlMaXN0PExvY2F0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KClcclxuICB2aWV3OiBudW1iZXIgPSAxO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIGlzc2VhcmNoZmlsdGVyOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIGlzc2hvd2xhYmxlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBsb2NhdGlvbnR5cGVJRDogbnVtYmVyID0gMTA7XHJcbiAgQElucHV0KClcclxuICBsb2NhdGlvbklEOiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpXHJcbiAgbG9jYXRpb25zZWFyY2hmaWx0ZXJJRDogbnVtYmVyID0gMDtcclxuXHJcbiAgQE91dHB1dCgpIGFkdmFuY2VkU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBsb2NhdGlvbmxldmVsdHlwZXMgPSBbXTtcclxuXHJcbiAgc2VhcmNoID0ge1xyXG4gICAgbG9jYXRpb25wYXJlbnRfSUQ6IG51bGxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9jYXRpb25sZXZlbHR5cGVzZXJ2aWNlOiBMb2NhdGlvbmxldmVsdHlwZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRvYXN0cnNlcnZpY2U6IFRvYXN0clNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG9uZmFpbHNlcnZpY2U6IE9uRmFpbFNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlR2V0KCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hmaWx0ZXIoKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9ucy5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICBpZiAoY2hpbGQubG9jYXRpb25JRCAhPSBudWxsKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoLmxvY2F0aW9ucGFyZW50X0lEID0gY2hpbGQubG9jYXRpb25JRDtcclxuICAgIH0pXHJcbiAgICB0aGlzLmFkdmFuY2VkU2VhcmNoLm5leHQodGhpcy5zZWFyY2gpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoZmlsdGVySUQoKSB7XHJcbiAgICB2YXIgbG9jYXRpb25JRDtcclxuICAgIHRoaXMubG9jYXRpb25zLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgIGlmIChjaGlsZC5sb2NhdGlvbklEICE9IG51bGwpXHJcbiAgICAgICAgbG9jYXRpb25JRCA9IGNoaWxkLmxvY2F0aW9uSUQ7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGxvY2F0aW9uSUQ7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICB9XHJcblxyXG4gIHNldExvY2F0aW9uKGxvY2F0aW9ucykge1xyXG4gICAgbG9jYXRpb25zLnJldmVyc2UoKTtcclxuICAgIGxvY2F0aW9ucy5mb3JFYWNoKGxvY2F0aW9uID0+IHtcclxuICAgICAgdGhpcy5sb2NhdGlvbnMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBpZiAoY2hpbGQubG9jYXRpb25sZXZlbHR5cGVJRCA9PSBsb2NhdGlvbi5sb2NhdGlvbmxldmVsdHlwZV9JRC5pZClcclxuICAgICAgICAgIGNoaWxkLmxvY2F0aW9uSUQgPSBsb2NhdGlvbi5sb2NhdGlvbl9JRDtcclxuICAgICAgICAgIGNoaWxkLmxvY2F0aW9uR2V0T25lKGxvY2F0aW9uLmxvY2F0aW9uX0lEKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZExvY2F0aW9uKGxvY2F0aW9uKSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIHRoaXMubG9jYXRpb25zLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgIGlmIChmb3VuZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgY2hpbGQuc2VhcmNoTG9jYXRpb24oY2hpbGQubG9jYXRpb25sZXZlbHR5cGVJRCwgbG9jYXRpb24ubG9jYXRpb25fSUQpO1xyXG4gICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbklEID0gbG9jYXRpb24ubG9jYXRpb25fSUQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaGlsZC5sb2NhdGlvbmxldmVsdHlwZUlEID09IGxvY2F0aW9uLmxvY2F0aW9ubGV2ZWx0eXBlX0lELmlkKVxyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICB0aGlzLmxvY2F0aW9uSUQgPSBsb2NhdGlvbi5sb2NhdGlvbl9JRDtcclxuICB9XHJcblxyXG4gIGxvY2F0aW9ubGV2ZWx0eXBlR2V0KCkge1xyXG4gICAgdGhpcy5sb2NhdGlvbmxldmVsdHlwZXNlcnZpY2UubG9va3VwKFwiTE9DQVRJT05MRVZFTFRZUEVcIikuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yICYmIHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgdGhpcy50b2FzdHJzZXJ2aWNlLndhcm5pbmcoXCJNZXNzYWdlXCIsIFwiIFwiICsgcmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3BvbnNlWzBdLmxvY2F0aW9ucGFyZW50SUQgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbmxldmVsdHlwZXMucHVzaChyZXNwb25zZVswXSk7XHJcbiAgICAgICAgICBmb3IgKHZhciBhID0gMTsgYSA8IHJlc3BvbnNlLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlW2FdLmxvY2F0aW9ucGFyZW50SUQgPSAtMTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlW2FdLmNvZGUgPD0gdGhpcy5sb2NhdGlvbnR5cGVJRClcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbmxldmVsdHlwZXMucHVzaChyZXNwb25zZVthXSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlcyA9IHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLm9uZmFpbHNlcnZpY2Uub25GYWlsKGVycm9yKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=