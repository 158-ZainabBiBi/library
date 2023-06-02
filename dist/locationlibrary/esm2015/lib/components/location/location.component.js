import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocationleveltypeService } from '../locationleveltype/locationleveltype.service';
import { LocationService } from './location.service';
import { OnfailService } from '../../services/onfail.service';
export class LocationComponent {
    constructor(locationservice, locationleveltypeservice, toastrservice, onfailservice, router) {
        this.locationservice = locationservice;
        this.locationleveltypeservice = locationleveltypeservice;
        this.toastrservice = toastrservice;
        this.onfailservice = onfailservice;
        this.router = router;
        this.view = 1;
        this.iscompulsory = false;
        this.isshowlables = true;
        this.disabled = false;
        this.all = false;
        this.locationID = null;
        this.locationleveltypeID = null;
        this.locationparentID = null;
        this.edit = new EventEmitter();
        this.cancel = new EventEmitter();
        this.selectedLocation = new EventEmitter();
        this.viewLocation = new EventEmitter();
        this.locationleveltypeLABEL = null;
        this.locations = [];
        this.locationsAll = [];
        this.location = {
            location_ID: 0,
            location_NAME: "",
            location_CODE: "",
            location_DESC: "",
            locationleveltype_ID: {
                id: null
            },
            locationparent_ID: null,
            latitude: null,
            longitude: null,
            altitude: null,
            isactive: true
        };
        this.search = {
            locationleveltype_ID: null,
            locationparent_ID: null
        };
    }
    ngOnInit() {
        this.locations = JSON.parse(window.sessionStorage.getItem('locations'));
        this.locationsAll = JSON.parse(window.sessionStorage.getItem('locationsAll'));
        if (this.view == 1 && this.locations == null) {
            this.locationGet();
        }
        else if (this.view == 6) {
            this.search = {
                locationleveltype_ID: this.locationleveltypeID,
                locationparent_ID: this.locationparentID
            };
            this.locationGetAdvancedSearchAll(this.search);
            this.locationleveltypeGetOne(this.locationleveltypeID);
        }
        if (this.locationID) {
            this.locationGetOne(this.locationID);
        }
    }
    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift({
            location: 'after',
            widget: 'dxButton',
            options: {
                width: 136,
                text: 'Refresh',
                onClick: this.locationGetAll.bind(this),
            },
        });
    }
    add() {
        this.addlocation.locationID = null;
        this.location = {
            location_ID: 0,
            location_NAME: "",
            location_CODE: "",
            location_DESC: "",
            locationleveltype_ID: {
                id: null
            },
            locationparent_ID: null,
            latitude: null,
            longitude: null,
            altitude: null,
            isactive: true
        };
    }
    update(row) {
        this.edit.next(row);
    }
    viewlocation(row) {
        this.viewLocation.next(row);
    }
    changeLocation(location) {
        for (var i = 0; i < this.locationsAll.length; i++) {
            if (location == this.locationsAll[i].location_ID)
                this.selectedLocation.next(this.locationsAll[i]);
        }
    }
    searchLocation(locationleveltype, locationparent) {
        this.locationleveltypeID = locationleveltype;
        this.locationparentID = locationparent;
        this.search = {
            locationleveltype_ID: this.locationleveltypeID,
            locationparent_ID: this.locationparentID
        };
        this.locationGetAdvancedSearchAll(this.search);
    }
    refreshLocation() {
        this.locationGetAdvancedSearchAll(this.search);
    }
    locationEdit() {
        this.disabled = false;
    }
    locationCancel() {
        this.disabled = true;
        if (this.location.location_ID == 0) {
            this.router.navigate(["/home/locations"], {});
        }
    }
    setlocations(response) {
        if (this.view == 1) {
            this.locations = response;
            window.sessionStorage.setItem("locations", JSON.stringify(this.locations));
        }
        else {
            this.locationsAll = response;
            window.sessionStorage.setItem("locationsAll", JSON.stringify(this.locationsAll));
        }
        this.cancel.next();
    }
    locationGet() {
        this.locationservice.get().subscribe(response => {
            if (response) {
                if (response.error && response.status) {
                    this.toastrservice.warning("Message", " " + response.message);
                }
                else {
                    response = this.locationservice.getAllDetail(response);
                    this.setlocations(response);
                }
            }
        }, error => {
            this.onfailservice.onFail(error);
        });
    }
    locationGetAll() {
        this.locationservice.getAll().subscribe(response => {
            if (response) {
                if (response.error && response.status) {
                    this.toastrservice.warning("Message", " " + response.message);
                }
                else {
                    response = this.locationservice.getAllDetail(response);
                    this.setlocations(response);
                }
            }
        }, error => {
            this.onfailservice.onFail(error);
        });
    }
    locationGetOne(id) {
        this.locationservice.getOne(id).subscribe(response => {
            if (response) {
                if (response.error && response.status) {
                    this.toastrservice.warning("Message", " " + response.message);
                }
                else {
                    response = this.locationservice.getDetail(response);
                    this.location = response;
                    this.disabled = true;
                    this.selectedLocation.next(response);
                }
            }
        }, error => {
            this.onfailservice.onFail(error);
        });
    }
    locationGetAdvancedSearchAll(search) {
        this.locationservice.advancedSearchAll(search).subscribe(response => {
            if (response) {
                if (response.error && response.status) {
                    this.toastrservice.warning("Message", " " + response.message);
                }
                else {
                    response = this.locationservice.getAllDetail(response);
                    this.setlocations(response);
                }
            }
        }, error => {
            this.onfailservice.onFail(error);
        });
    }
    locationAdd(location) {
        location.locationleveltype_ID = this.locationleveltype.locationleveltypeID;
        location.locationparent_ID = this.locationsearchfilter.searchfilterID();
        this.locationservice.add(location).subscribe(response => {
            if (response) {
                if (response.error && response.status) {
                    this.toastrservice.warning("Message", " " + response.message);
                }
                else if (response.location_ID) {
                    this.toastrservice.success("Success", "New Location Added");
                    this.locationGetAll();
                }
                else {
                    this.toastrservice.error("Some thing went wrong");
                }
            }
        }, error => {
            this.onfailservice.onFail(error);
        });
    }
    locationUpdate(location) {
        location.locationleveltype_ID = this.locationleveltype.locationleveltypeID;
        location.locationparent_ID = this.editlocation.locationID;
        console.log(location);
        if (location.isactive == true) {
            location.isactive = "Y";
        }
        else {
            location.isactive = "N";
        }
        this.locationservice.update(location, location.location_ID).subscribe(response => {
            if (response) {
                if (response.error && response.status) {
                    this.toastrservice.warning("Message", " " + response.message);
                }
                else if (response.location_ID) {
                    this.toastrservice.success("Success", " Location Updated");
                    this.locationGetAll();
                }
                else {
                    this.toastrservice.error("Some thing went wrong");
                }
            }
        }, error => {
            this.onfailservice.onFail(error);
        });
    }
    locationleveltypeGetOne(id) {
        this.locationleveltypeservice.getOne(id).subscribe(response => {
            if (response) {
                if (response.error && response.status) {
                    this.toastrservice.warning("Message", " " + response.message);
                }
                else {
                    this.locationleveltypeLABEL = response.description;
                }
            }
        }, error => {
            this.onfailservice.onFail(error);
        });
    }
}
LocationComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-location',
                template: "<div *ngIf=\"view==1\" class=\"form-group\">\r\n    <label class=\"custom-label form-label\">Location\r\n      <span style=\"color: red;\" [hidden]=\"disabled\" *ngIf=\"iscompulsory==true\">*</span>\r\n  </label>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <ng-select [(ngModel)]=\"locationID\" [disabled]=\"disabled\" name=\"locationID\">\r\n                <ng-option *ngFor=\"let location of locations\" [value]=\"location.location_ID\" [disabled]=\"disabled\">\r\n                    {{ location.location_CODE }} - {{ location.location_NAME }}\r\n                </ng-option>\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn btn-light ml-2\" [hidden]=\"disabled\" (click)=\"locationGet()\">\r\n              <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==2\" class=\"form-group\">\r\n    <div class=\"outer-div\">\r\n        <div class=\"grid-wrapper\">\r\n            <dx-data-grid #grid id=\"gridContainer\" [dataSource]=\"locationsAll\" keyExpr=\"location_ID\" [showColumnLines]=\"true\" [showRowLines]=\"true\" [showBorders]=\"true\" [rowAlternationEnabled]=\"true\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"30\"\r\n                [columnAutoWidth]=\"true\" [remoteOperations]=\"true\" height=\"600\" width=\"100%\"\r\n                (onToolbarPreparing)=\"onToolbarPreparing($event)\">\r\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n                <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n                <dxo-search-panel [visible]=\"true\"></dxo-search-panel>\r\n                <dxo-group-panel [visible]=\"false\"></dxo-group-panel>\r\n                <dxo-grouping #expand [autoExpandAll]=\"false\"></dxo-grouping>\r\n                <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n                <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n                <dxo-selection mode=\"single\"></dxo-selection>\r\n                <dxi-column [width]=\"75\" [allowFiltering]=\"false\" [allowSorting]=\"false\" alignment=\"center\" cellTemplate=\"cellTemplate\"></dxi-column>\r\n                <dxi-column [width]=\"120\" dataField=\"location_CODE\" caption=\"Code\" cssClass=\"myClass\" alignment=\"center\"></dxi-column>\r\n                <dxi-column [width]=\"300\" dataField=\"location_NAME\" caption=\"Name\" cssClass=\"myClass\" alignment=\"left\"></dxi-column>\r\n                <dxi-column dataField=\"location_DESC\" caption=\"Description\" cssClass=\"myClass\" alignment=\"left\"></dxi-column>\r\n                <dxi-column [width]=\"300\" dataField=\"locationparent_ID.location_NAME\" caption=\"Parent Location\" cssClass=\"myClass\" alignment=\"center\"></dxi-column>\r\n                <dxi-column [width]=\"300\" dataField=\"locationleveltype\" caption=\"Level Type\" cssClass=\"myClass\" alignment=\"center\"></dxi-column>\r\n                <dxi-column [width]=\"100\" dataField=\"isactive\" caption=\"Active\" cssClass=\"myClass\" alignment=\"center\"></dxi-column>\r\n\r\n                <div *dxTemplate=\"let data of 'cellTemplate'\">\r\n                    <a href=\"javascript:void\" class=\"\" (click)=\"viewlocation(data)\">\r\n                        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i></a>\r\n                </div>\r\n            </dx-data-grid>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==3\" class=\"form-group\">\r\n    <form action=\"\" class=\"form\" (ngSubmit)=\"f.form.valid && locationAdd(location)\" #f=\"ngForm\" novalidate>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Code <span style=\"color:red\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"location_CODE\" [(ngModel)]=\"location.location_CODE\" maxlength=\"50\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Name <span style=\"color:red\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"location_NAME\" [(ngModel)]=\"location.location_NAME\" maxlength=\"50\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                        <app-locationleveltype #locationleveltype [iscompulsory]=\"true\" [locationleveltypeID]=\"location.locationleveltype_ID\"></app-locationleveltype>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <app-location #addlocation [view]=\"1\"></app-location>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Description</label>\r\n                        <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"location.location_DESC\" name=\"location_DESC\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">\r\n              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div *ngIf=\"view==4\" class=\"form-group\">\r\n    <form action=\"\" class=\"form\" (ngSubmit)=\"f.form.valid && locationUpdate(location)\" #f=\"ngForm\" novalidate>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Code <span style=\"color:red\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"location_CODE\" [(ngModel)]=\"location.location_CODE\" maxlength=\"50\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Name <span style=\"color:red\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"location_NAME\" [(ngModel)]=\"location.location_NAME\" maxlength=\"50\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <app-locationleveltype #locationleveltype [iscompulsory]=\"true\" [locationleveltypeID]=\"location.locationleveltype_ID\"></app-locationleveltype>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <app-location #editlocation [view]=\"1\" [locationID]=\"location.locationparent_ID\"></app-location>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Description</label>\r\n                        <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"location.location_DESC\" name=\"location_DESC\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"checkbox\">\r\n                            <label class=\"control-label\">\r\n                              <input type=\"checkbox\" [checked]=\"location.isactive\"\r\n                                  [(ngModel)]=\"location.isactive\" name=\"isactive\">\r\n                              Active\r\n                          </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">\r\n              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Update\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div *ngIf=\"view==5\" class=\"form-group\">\r\n    <div class=\"modal-body\">\r\n        <app-locationsearchfilter #locationsearchfilter [issearchfilter]=false *ngIf=\"disabled==false\"></app-locationsearchfilter>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\"> Location Code\r\n                        <span style=\"color: red;\" [hidden]=\"disabled\">*</span>\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"location_CODE\" [(ngModel)]=\"location.location_CODE\" [disabled]='disabled' required>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\"> Location Name\r\n                        <span style=\"color: red;\" [hidden]=\"disabled\">*</span>\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"location_NAME\" [(ngModel)]=\"location.location_NAME\" [disabled]='disabled' required>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <app-locationleveltype #locationleveltype [disabled]='disabled' [locationleveltypeID]=\"location.locationleveltype_ID.id\"></app-locationleveltype>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"location.location_ID!=0\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Location Parent</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"locationparent_ID\" [(ngModel)]=\"location.locationparent_ID.location_NAME\" [disabled]=true>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\"> Location Description</label>\r\n                    <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"location.location_DESC\" name=\"location_DESC\" [disabled]='disabled'></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"location.location_ID!=0\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Latitude</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"latitude\" [(ngModel)]=\"location.latitude\" [disabled]='disabled'>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Longitude</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"longitude\" [(ngModel)]=\"location.longitude\" [disabled]='disabled'>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Altitude</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"altitude\" [(ngModel)]=\"location.altitude\" [disabled]='disabled'>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\"><br /><br />\r\n                    <div class=\"checkbox\">\r\n                        <label class=\"control-label\">\r\n                            <input type=\"checkbox\" [checked]=\"location.isactive\"\r\n                                [(ngModel)]=\"location.isactive\" [disabled]='disabled' name=\"isactive\">\r\n                            Active\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3\">\r\n                <button *ngIf=\"location.location_ID!=0 && disabled==true\" (click)=\"locationEdit()\" id=\"cancel\" class=\"btn btn-primary\"\r\n                    style=\"float: right;\"> Edit\r\n                </button>\r\n                <button *ngIf=\"disabled==false\" type=\"button\" (click)='locationCancel()' style=\"float: right;\"\r\n                    class=\"btn btn-light\" data-dismiss=\"modal\"> Cancel\r\n                </button>\r\n                <button *ngIf=\"location.location_ID!=0 && disabled==false\" type=\"button\" data-dismiss=\"modal\"\r\n                    style=\" margin-right: 10px; float: right;\" (click)='locationUpdate(location)'\r\n                    class=\"btn btn-primary\">\r\n                    Update\r\n                </button>\r\n                <button *ngIf=\"location.location_ID==0\" type=\"button\" data-dismiss=\"modal\"\r\n                    style=\" margin-right: 10px; float: right;\" (click)='locationAdd(location)'\r\n                    class=\"btn btn-primary\">\r\n                    Save\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==6\" class=\"form-group\">\r\n    <label *ngIf=\"isshowlables==true\" class=\"custom-label form-label\"> {{ locationleveltypeLABEL }}\r\n      <span style=\"color: red;\" [hidden]=\"disabled\" *ngIf=\"iscompulsory==true\">*</span>\r\n  </label>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <ng-select [(ngModel)]=\"locationID\" [disabled]=\"disabled\" name=\"locationID\" (change)=\"changeLocation($event)\">\r\n                <ng-option *ngFor=\"let location of locationsAll\" [value]=\"location.location_ID\" [disabled]=\"disabled\">\r\n                    {{ location.location_CODE }} - {{ location.location_NAME }}\r\n                </ng-option>\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn btn-light ml-2\" [hidden]=\"disabled\" (click)=\"refreshLocation()\">\r\n              <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                styles: [""]
            },] }
];
LocationComponent.ctorParameters = () => [
    { type: LocationService },
    { type: LocationleveltypeService },
    { type: ToastrService },
    { type: OnfailService },
    { type: Router }
];
LocationComponent.propDecorators = {
    locationleveltype: [{ type: ViewChild, args: ["locationleveltype",] }],
    locationsearchfilter: [{ type: ViewChild, args: ["locationsearchfilter",] }],
    addlocation: [{ type: ViewChild, args: ["addlocation",] }],
    editlocation: [{ type: ViewChild, args: ["editlocation",] }],
    view: [{ type: Input }],
    iscompulsory: [{ type: Input }],
    isshowlables: [{ type: Input }],
    disabled: [{ type: Input }],
    all: [{ type: Input }],
    locationID: [{ type: Input }],
    locationleveltypeID: [{ type: Input }],
    locationparentID: [{ type: Input }],
    edit: [{ type: Output }],
    cancel: [{ type: Output }],
    selectedLocation: [{ type: Output }],
    viewLocation: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9jYXRpb25saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU85RCxNQUFNLE9BQU8saUJBQWlCO0lBa0Q1QixZQUNVLGVBQWdDLEVBQ2hDLHdCQUFrRCxFQUNsRCxhQUE0QixFQUM1QixhQUE0QixFQUM1QixNQUFlO1FBSmYsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQWhEekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFFckIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUVsQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7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WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7OztZQTNSRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDRtZUFBd0M7O2FBRXpDOzs7WUFQUSxlQUFlO1lBSGYsd0JBQXdCO1lBRnhCLGFBQWE7WUFNYixhQUFhO1lBUGIsTUFBTTs7O2dDQWVaLFNBQVMsU0FBQyxtQkFBbUI7bUNBQzdCLFNBQVMsU0FBQyxzQkFBc0I7MEJBQ2hDLFNBQVMsU0FBQyxhQUFhOzJCQUN2QixTQUFTLFNBQUMsY0FBYzttQkFFeEIsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7dUJBRUwsS0FBSztrQkFFTCxLQUFLO3lCQUVMLEtBQUs7a0NBRUwsS0FBSzsrQkFFTCxLQUFLO21CQUdMLE1BQU07cUJBQ04sTUFBTTsrQkFDTixNQUFNOzJCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xyXG5cclxuaW1wb3J0IHsgTG9jYXRpb25sZXZlbHR5cGVTZXJ2aWNlIH0gZnJvbSAnLi4vbG9jYXRpb25sZXZlbHR5cGUvbG9jYXRpb25sZXZlbHR5cGUuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2F0aW9ubGV2ZWx0eXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vbG9jYXRpb25sZXZlbHR5cGUvbG9jYXRpb25sZXZlbHR5cGUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBMb2NhdGlvbnNlYXJjaGZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uL2xvY2F0aW9uc2VhcmNoZmlsdGVyL2xvY2F0aW9uc2VhcmNoZmlsdGVyLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9sb2NhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT25mYWlsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29uZmFpbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxvY2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9jYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoXCJsb2NhdGlvbmxldmVsdHlwZVwiKSBsb2NhdGlvbmxldmVsdHlwZTogTG9jYXRpb25sZXZlbHR5cGVDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZChcImxvY2F0aW9uc2VhcmNoZmlsdGVyXCIpIGxvY2F0aW9uc2VhcmNoZmlsdGVyOiBMb2NhdGlvbnNlYXJjaGZpbHRlckNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKFwiYWRkbG9jYXRpb25cIikgYWRkbG9jYXRpb246IExvY2F0aW9uQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoXCJlZGl0bG9jYXRpb25cIikgZWRpdGxvY2F0aW9uOiBMb2NhdGlvbkNvbXBvbmVudDtcclxuXHJcbiAgQElucHV0KClcclxuICB2aWV3OiBudW1iZXIgPSAxO1xyXG4gIEBJbnB1dCgpXHJcbiAgaXNjb21wdWxzb3J5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBpc3Nob3dsYWJsZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIGFsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbG9jYXRpb25JRCA9IG51bGw7XHJcbiAgQElucHV0KClcclxuICBsb2NhdGlvbmxldmVsdHlwZUlEID0gbnVsbDtcclxuICBASW5wdXQoKVxyXG4gIGxvY2F0aW9ucGFyZW50SUQgPSBudWxsO1xyXG5cclxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZExvY2F0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB2aWV3TG9jYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGxvY2F0aW9ubGV2ZWx0eXBlTEFCRUwgPSBudWxsO1xyXG4gIGxvY2F0aW9ucyA9IFtdO1xyXG4gIGxvY2F0aW9uc0FsbCA9IFtdO1xyXG4gIGxvY2F0aW9uID0ge1xyXG4gICAgbG9jYXRpb25fSUQ6IDAsXHJcbiAgICBsb2NhdGlvbl9OQU1FOiBcIlwiLFxyXG4gICAgbG9jYXRpb25fQ09ERTogXCJcIixcclxuICAgIGxvY2F0aW9uX0RFU0M6IFwiXCIsXHJcbiAgICBsb2NhdGlvbmxldmVsdHlwZV9JRDoge1xyXG4gICAgICBpZDogbnVsbFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9ucGFyZW50X0lEOiBudWxsLFxyXG4gICAgbGF0aXR1ZGU6IG51bGwsXHJcbiAgICBsb25naXR1ZGU6IG51bGwsXHJcbiAgICBhbHRpdHVkZTogbnVsbCxcclxuICAgIGlzYWN0aXZlOiB0cnVlXHJcbiAgfVxyXG4gIHNlYXJjaCA9IHtcclxuICAgIGxvY2F0aW9ubGV2ZWx0eXBlX0lEOiBudWxsLFxyXG4gICAgbG9jYXRpb25wYXJlbnRfSUQ6IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbnNlcnZpY2U6IExvY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYXRpb25sZXZlbHR5cGVzZXJ2aWNlOiBMb2NhdGlvbmxldmVsdHlwZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRvYXN0cnNlcnZpY2U6IFRvYXN0clNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG9uZmFpbHNlcnZpY2U6IE9uZmFpbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlciA6IFJvdXRlcixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYXRpb25zID0gSlNPTi5wYXJzZSh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb25zJykpO1xyXG4gICAgdGhpcy5sb2NhdGlvbnNBbGwgPSBKU09OLnBhcnNlKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbnNBbGwnKSk7XHJcbiAgICBpZiAodGhpcy52aWV3ID09IDEgJiYgdGhpcy5sb2NhdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uR2V0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudmlldyA9PSA2KSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoID0ge1xyXG4gICAgICAgIGxvY2F0aW9ubGV2ZWx0eXBlX0lEOiB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlSUQsXHJcbiAgICAgICAgbG9jYXRpb25wYXJlbnRfSUQ6IHRoaXMubG9jYXRpb25wYXJlbnRJRFxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9jYXRpb25HZXRBZHZhbmNlZFNlYXJjaEFsbCh0aGlzLnNlYXJjaCk7XHJcbiAgICAgIHRoaXMubG9jYXRpb25sZXZlbHR5cGVHZXRPbmUodGhpcy5sb2NhdGlvbmxldmVsdHlwZUlEKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sb2NhdGlvbklEKSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb25HZXRPbmUodGhpcy5sb2NhdGlvbklEKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvb2xiYXJQcmVwYXJpbmcoZSkge1xyXG4gICAgZS50b29sYmFyT3B0aW9ucy5pdGVtcy51bnNoaWZ0KFxyXG4gICAgICB7XHJcbiAgICAgICAgbG9jYXRpb246ICdhZnRlcicsXHJcbiAgICAgICAgd2lkZ2V0OiAnZHhCdXR0b24nLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIHdpZHRoOiAxMzYsXHJcbiAgICAgICAgICB0ZXh0OiAnUmVmcmVzaCcsXHJcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmxvY2F0aW9uR2V0QWxsLmJpbmQodGhpcyksXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZCgpIHtcclxuICAgIHRoaXMuYWRkbG9jYXRpb24ubG9jYXRpb25JRCA9IG51bGw7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0ge1xyXG4gICAgICBsb2NhdGlvbl9JRDogMCxcclxuICAgICAgbG9jYXRpb25fTkFNRTogXCJcIixcclxuICAgICAgbG9jYXRpb25fQ09ERTogXCJcIixcclxuICAgICAgbG9jYXRpb25fREVTQzogXCJcIixcclxuICAgICAgbG9jYXRpb25sZXZlbHR5cGVfSUQ6IHtcclxuICAgICAgICBpZDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgICBsb2NhdGlvbnBhcmVudF9JRDogbnVsbCxcclxuICAgICAgbGF0aXR1ZGU6IG51bGwsXHJcbiAgICAgIGxvbmdpdHVkZTogbnVsbCxcclxuICAgICAgYWx0aXR1ZGU6IG51bGwsXHJcbiAgICAgIGlzYWN0aXZlOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHJvdykge1xyXG4gICAgdGhpcy5lZGl0Lm5leHQocm93KTtcclxuICB9XHJcblxyXG4gIHZpZXdsb2NhdGlvbihyb3cpIHtcclxuICAgIHRoaXMudmlld0xvY2F0aW9uLm5leHQocm93KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUxvY2F0aW9uKGxvY2F0aW9uKSB7XHJcbiAgICBmb3IgKHZhciBpPTA7IGk8dGhpcy5sb2NhdGlvbnNBbGwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGxvY2F0aW9uID09IHRoaXMubG9jYXRpb25zQWxsW2ldLmxvY2F0aW9uX0lEKVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMb2NhdGlvbi5uZXh0KHRoaXMubG9jYXRpb25zQWxsW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaExvY2F0aW9uKGxvY2F0aW9ubGV2ZWx0eXBlLCBsb2NhdGlvbnBhcmVudCkge1xyXG4gICAgdGhpcy5sb2NhdGlvbmxldmVsdHlwZUlEID0gbG9jYXRpb25sZXZlbHR5cGU7XHJcbiAgICB0aGlzLmxvY2F0aW9ucGFyZW50SUQgPSBsb2NhdGlvbnBhcmVudDtcclxuICAgIHRoaXMuc2VhcmNoID0ge1xyXG4gICAgICBsb2NhdGlvbmxldmVsdHlwZV9JRDogdGhpcy5sb2NhdGlvbmxldmVsdHlwZUlELFxyXG4gICAgICBsb2NhdGlvbnBhcmVudF9JRDogdGhpcy5sb2NhdGlvbnBhcmVudElEXHJcbiAgICB9XHJcbiAgICB0aGlzLmxvY2F0aW9uR2V0QWR2YW5jZWRTZWFyY2hBbGwodGhpcy5zZWFyY2gpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaExvY2F0aW9uKCkge1xyXG4gICAgdGhpcy5sb2NhdGlvbkdldEFkdmFuY2VkU2VhcmNoQWxsKHRoaXMuc2VhcmNoKTtcclxuICB9XHJcblxyXG4gIGxvY2F0aW9uRWRpdCgpe1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbG9jYXRpb25DYW5jZWwoKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmxvY2F0aW9uLmxvY2F0aW9uX0lEPT0wKSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lL2xvY2F0aW9uc1wiXSwge30pO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRsb2NhdGlvbnMocmVzcG9uc2UpIHtcclxuICAgIGlmICh0aGlzLnZpZXcgPT0gMSkge1xyXG4gICAgICB0aGlzLmxvY2F0aW9ucyA9IHJlc3BvbnNlO1xyXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2F0aW9uc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxvY2F0aW9ucykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2NhdGlvbnNBbGwgPSByZXNwb25zZTtcclxuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhdGlvbnNBbGxcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5sb2NhdGlvbnNBbGwpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FuY2VsLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGxvY2F0aW9uR2V0KCkge1xyXG4gICAgdGhpcy5sb2NhdGlvbnNlcnZpY2UuZ2V0KCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yICYmIHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgdGhpcy50b2FzdHJzZXJ2aWNlLndhcm5pbmcoXCJNZXNzYWdlXCIsIFwiIFwiICsgcmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmxvY2F0aW9uc2VydmljZS5nZXRBbGxEZXRhaWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgdGhpcy5zZXRsb2NhdGlvbnMocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLm9uZmFpbHNlcnZpY2Uub25GYWlsKGVycm9yKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsb2NhdGlvbkdldEFsbCgpIHtcclxuICAgIHRoaXMubG9jYXRpb25zZXJ2aWNlLmdldEFsbCgpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgIHRoaXMudG9hc3Ryc2VydmljZS53YXJuaW5nKFwiTWVzc2FnZVwiLCBcIiBcIiArIHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5sb2NhdGlvbnNlcnZpY2UuZ2V0QWxsRGV0YWlsKHJlc3BvbnNlKTtcclxuICAgICAgICAgIHRoaXMuc2V0bG9jYXRpb25zKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5vbmZhaWxzZXJ2aWNlLm9uRmFpbChlcnJvcik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbG9jYXRpb25HZXRPbmUoaWQpIHtcclxuICAgIHRoaXMubG9jYXRpb25zZXJ2aWNlLmdldE9uZShpZCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yICYmIHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgdGhpcy50b2FzdHJzZXJ2aWNlLndhcm5pbmcoXCJNZXNzYWdlXCIsIFwiIFwiICsgcmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmxvY2F0aW9uc2VydmljZS5nZXREZXRhaWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkTG9jYXRpb24ubmV4dChyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMub25mYWlsc2VydmljZS5vbkZhaWwoZXJyb3IpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxvY2F0aW9uR2V0QWR2YW5jZWRTZWFyY2hBbGwoc2VhcmNoKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9uc2VydmljZS5hZHZhbmNlZFNlYXJjaEFsbChzZWFyY2gpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgIHRoaXMudG9hc3Ryc2VydmljZS53YXJuaW5nKFwiTWVzc2FnZVwiLCBcIiBcIiArIHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNwb25zZSA9IHRoaXMubG9jYXRpb25zZXJ2aWNlLmdldEFsbERldGFpbChyZXNwb25zZSk7XHJcbiAgICAgICAgICB0aGlzLnNldGxvY2F0aW9ucyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMub25mYWlsc2VydmljZS5vbkZhaWwoZXJyb3IpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxvY2F0aW9uQWRkKGxvY2F0aW9uKSB7XHJcbiAgICBsb2NhdGlvbi5sb2NhdGlvbmxldmVsdHlwZV9JRCA9IHRoaXMubG9jYXRpb25sZXZlbHR5cGUubG9jYXRpb25sZXZlbHR5cGVJRDtcclxuICAgIGxvY2F0aW9uLmxvY2F0aW9ucGFyZW50X0lEID0gdGhpcy5sb2NhdGlvbnNlYXJjaGZpbHRlci5zZWFyY2hmaWx0ZXJJRCgpO1xyXG4gICAgdGhpcy5sb2NhdGlvbnNlcnZpY2UuYWRkKGxvY2F0aW9uKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IgJiYgcmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0cnNlcnZpY2Uud2FybmluZyhcIk1lc3NhZ2VcIiwgXCIgXCIgKyByZXNwb25zZS5tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmxvY2F0aW9uX0lEKSB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0cnNlcnZpY2Uuc3VjY2VzcyhcIlN1Y2Nlc3NcIiwgXCJOZXcgTG9jYXRpb24gQWRkZWRcIik7XHJcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uR2V0QWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudG9hc3Ryc2VydmljZS5lcnJvcihcIlNvbWUgdGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5vbmZhaWxzZXJ2aWNlLm9uRmFpbChlcnJvcik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbG9jYXRpb25VcGRhdGUobG9jYXRpb24pIHtcclxuICAgIGxvY2F0aW9uLmxvY2F0aW9ubGV2ZWx0eXBlX0lEID0gdGhpcy5sb2NhdGlvbmxldmVsdHlwZS5sb2NhdGlvbmxldmVsdHlwZUlEO1xyXG4gICAgbG9jYXRpb24ubG9jYXRpb25wYXJlbnRfSUQgPSB0aGlzLmVkaXRsb2NhdGlvbi5sb2NhdGlvbklEO1xyXG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xyXG4gICAgaWYgKGxvY2F0aW9uLmlzYWN0aXZlID09IHRydWUpIHtcclxuICAgICAgbG9jYXRpb24uaXNhY3RpdmUgPSBcIllcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2F0aW9uLmlzYWN0aXZlID0gXCJOXCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvY2F0aW9uc2VydmljZS51cGRhdGUobG9jYXRpb24sIGxvY2F0aW9uLmxvY2F0aW9uX0lEKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IgJiYgcmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0cnNlcnZpY2Uud2FybmluZyhcIk1lc3NhZ2VcIiwgXCIgXCIgKyByZXNwb25zZS5tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmxvY2F0aW9uX0lEKSB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0cnNlcnZpY2Uuc3VjY2VzcyhcIlN1Y2Nlc3NcIiwgXCIgTG9jYXRpb24gVXBkYXRlZFwiKTtcclxuICAgICAgICAgIHRoaXMubG9jYXRpb25HZXRBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50b2FzdHJzZXJ2aWNlLmVycm9yKFwiU29tZSB0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLm9uZmFpbHNlcnZpY2Uub25GYWlsKGVycm9yKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsb2NhdGlvbmxldmVsdHlwZUdldE9uZShpZCl7XHJcbiAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlc2VydmljZS5nZXRPbmUoaWQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgIHRoaXMudG9hc3Ryc2VydmljZS53YXJuaW5nKFwiTWVzc2FnZVwiLCBcIiBcIiArIHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvY2F0aW9ubGV2ZWx0eXBlTEFCRUwgPSByZXNwb25zZS5kZXNjcmlwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5vbmZhaWxzZXJ2aWNlLm9uRmFpbChlcnJvcik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=