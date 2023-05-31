import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, ViewChild, Input, Output, ViewChildren, NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as i2 from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import * as i3 from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { OnFailService as OnFailService$1 } from 'projects/locationlibrary/src/lib/services/on-fail.service';
import { HttpCallServieService as HttpCallServieService$1 } from 'projects/locationlibrary/src/lib/services/http-call-service.service';
import * as i1 from '@angular/http';
import { Http, BaseRequestOptions, Headers } from '@angular/http';
import { map, retry, catchError } from 'rxjs/operators';
import { setting as setting$1 } from 'projects/locationlibrary/src/lib/setting';
import { throwError } from 'rxjs';

class LocationlibraryService {
    constructor() { }
}
LocationlibraryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LocationlibraryService_Factory() { return new LocationlibraryService(); }, token: LocationlibraryService, providedIn: "root" });
LocationlibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LocationlibraryService.ctorParameters = () => [];

class LocationlibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
LocationlibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-locationlibrary',
                template: `
    <p>
      locationlibrary works!
    </p>
  `
            },] }
];
LocationlibraryComponent.ctorParameters = () => [];

const setting = {
    AppsStorePath: "http://apps.kitaas.edu.pk/#/",
    LoginAppPath: "http://accounts.kitaas.edu.pk/#/",
    application_ID: "LocationManagementDev",
    companyName: 'Khuldunia Inistitute of Technology and Applied Sciences',
    companyShortName: 'KITAAS',
    logo: 'https://kitaas.com.pk/kitaasdesign/images/logo.png',
    logo1white: 'https://kitaas.com.pk/kitaasdesign/images/logo-short.png',
    loginBanner1: 'https://kitaas.com.pk/kitaasdesign/images/intro-back.jpeg',
    icon: 'https://kitaas.com.pk/kitaasdesign/images/favicon.ico',
    service_NAME: 'LOCATION',
    locationservice_NAME: 'LOCATION',
    isHash: '/#',
    redirctPath: '',
};

class LoginService {
    constructor(http, _router, _toastr) {
        this.http = http;
        this._router = _router;
        this._toastr = _toastr;
    }
    saveToken(token) {
        if (token) {
            localStorage.setItem("access_token", token);
            return true;
        }
        else {
            return false;
        }
    }
    saveDetail(user) {
        if (user) {
            localStorage.setItem(setting$1.application_ID, JSON.stringify(user));
            return true;
        }
        else {
            return false;
        }
    }
    loadToken() {
        const token = localStorage.getItem("access_token");
        this.authToken = token;
    }
    loaddetail() {
        const getUser = localStorage.getItem(setting$1.application_ID);
        this.user = JSON.parse(getUser);
        return this.user;
    }
    logout() {
        localStorage.removeItem(setting$1.application_ID);
        localStorage.removeItem("access_token");
        window.location.assign(setting$1.LoginAppPath + "logout?application_ID=" + setting$1.application_ID);
        return true;
    }
    logged() {
        const getUser = localStorage.getItem(setting$1.application_ID);
        const _application_name_access_token_ = localStorage.getItem("access_token");
        if (getUser && _application_name_access_token_) {
            return true;
        }
        else {
            return false;
        }
    }
}
LoginService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoginService_Factory() { return new LoginService(i0.ɵɵinject(i1.Http), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.ToastrService)); }, token: LoginService, providedIn: "root" });
LoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
LoginService.ctorParameters = () => [
    { type: Http },
    { type: Router },
    { type: ToastrService }
];

class HttpCallServieService {
    constructor(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.BaseUrl = this.loginService.loaddetail().applicationservice_PATH;
        this.AuthUrl = this.loginService.loaddetail().oauthservice_PATH;
    }
    api(postData) {
        return this.http.post(this.BaseUrl + "apigateway", postData).pipe(map(res => res.json()));
    }
}
HttpCallServieService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpCallServieService_Factory() { return new HttpCallServieService(i0.ɵɵinject(i1.Http), i0.ɵɵinject(LoginService)); }, token: HttpCallServieService, providedIn: "root" });
HttpCallServieService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
HttpCallServieService.ctorParameters = () => [
    { type: Http },
    { type: LoginService }
];

class LocationleveltypeService {
    constructor(_HttpCallServieService_) {
        this._HttpCallServieService_ = _HttpCallServieService_;
    }
    get() {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "GET",
            request_URI: "lookup",
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    getAll() {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "GET",
            request_URI: "lookup/all",
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    getOne(id) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "GET",
            request_URI: "lookup/" + id,
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    add(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "lookup",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    update(data, id) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "PUT",
            request_URI: "lookup/" + id,
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    delete(id) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "DELETE",
            request_URI: "lookup/" + id,
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    search(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "lookup/search",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    searchAll(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "lookup/search/all",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    advancedSearch(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "lookup/advancedsearch",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    advancedSearchAll(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "lookup/advancedsearch/all",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    lookup(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "lookup/entity",
            request_BODY: JSON.stringify({ entityname: data })
        };
        return this._HttpCallServieService_.api(postData);
    }
    entityList() {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "GET",
            request_URI: "lookup/entitylist",
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
}
LocationleveltypeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LocationleveltypeService_Factory() { return new LocationleveltypeService(i0.ɵɵinject(HttpCallServieService)); }, token: LocationleveltypeService, providedIn: "root" });
LocationleveltypeService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
LocationleveltypeService.ctorParameters = () => [
    { type: HttpCallServieService$1 }
];

class LocationService {
    constructor(_HttpCallServieService_) {
        this._HttpCallServieService_ = _HttpCallServieService_;
    }
    get() {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "GET",
            request_URI: "location",
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    getAll() {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "GET",
            request_URI: "location/all",
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    getOne(id) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "GET",
            request_URI: "location/" + id,
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    add(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "location",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    update(data, id) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "PUT",
            request_URI: "location/" + id,
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    delete(id) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "DELETE",
            request_URI: "location/" + id,
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    search(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "location/search",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    searchAll(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "location/search/all",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    advancedSearch(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "location/advancedsearch",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    advancedSearchAll(data) {
        var postData = {
            service_NAME: setting.locationservice_NAME,
            request_TYPE: "POST",
            request_URI: "location/advancedsearch/all",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    getAllDetail(response) {
        for (var a = 0; a < response.length; a++) {
            response[a].locationleveltype = response[a].locationleveltype_ID.code + " - " + response[a].locationleveltype_ID.description;
        }
        return (response);
    }
    getDetail(response) {
        response.locationleveltype = response.locationleveltype_ID.code + " - " + response.locationleveltype_ID.description;
        if (response.isactive == "Y") {
            response.isactive = true;
        }
        else {
            response.isactive = false;
        }
        return (response);
    }
}
LocationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LocationService_Factory() { return new LocationService(i0.ɵɵinject(HttpCallServieService)); }, token: LocationService, providedIn: "root" });
LocationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
LocationService.ctorParameters = () => [
    { type: HttpCallServieService$1 }
];

class LocationComponent {
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
    { type: OnFailService$1 },
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

class LocationsearchfilterComponent {
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
    { type: OnFailService$1 }
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

class LocationleveltypeComponent {
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
    { type: OnFailService$1 }
];
LocationleveltypeComponent.propDecorators = {
    iscompulsory: [{ type: Input }],
    disabled: [{ type: Input }],
    all: [{ type: Input }],
    locationleveltypeID: [{ type: Input }]
};

class LocationlibraryModule {
    constructor() { }
    ngOnInit() {
    }
}
LocationlibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LocationlibraryComponent, LocationComponent, LocationleveltypeComponent, LocationsearchfilterComponent],
                imports: [
                    RouterModule,
                    HttpClientModule,
                    CommonModule,
                ],
                providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
                exports: [LocationlibraryComponent, LocationComponent, LocationleveltypeComponent, LocationsearchfilterComponent]
            },] }
];
LocationlibraryModule.ctorParameters = () => [];

class GetaddressService {
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
GetaddressService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GetaddressService_Factory() { return new GetaddressService(i0.ɵɵinject(HttpCallServieService)); }, token: GetaddressService, providedIn: "root" });
GetaddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GetaddressService.ctorParameters = () => [
    { type: HttpCallServieService }
];

class HttpErrorInterceptor {
    intercept(request, next) {
        return next.handle(request).pipe(retry(1), catchError((error) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
            }
            else {
                // server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            return throwError(errorMessage);
        }));
    }
}

class LookupService {
    constructor(_HttpCallServieService_) {
        this._HttpCallServieService_ = _HttpCallServieService_;
    }
    get() {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "GET",
            request_URI: "lookup",
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    getAll() {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "GET",
            request_URI: "lookup/all",
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    getOne(id) {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "GET",
            request_URI: "lookup/" + id,
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    add(data) {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "lookup",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    update(data, id) {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "PUT",
            request_URI: "lookup/" + id,
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    delete(id) {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "DELETE",
            request_URI: "lookup/" + id,
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
    search(data) {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "lookup/search",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    searchAll(data) {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "lookup/search/all",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    advancedSearch(data) {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "lookup/advancedsearch",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    advancedSearchAll(data) {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "lookup/advancedsearch/all",
            request_BODY: JSON.stringify(data)
        };
        return this._HttpCallServieService_.api(postData);
    }
    lookup(data) {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "lookup/entity",
            request_BODY: JSON.stringify({ entityname: data })
        };
        return this._HttpCallServieService_.api(postData);
    }
    entityList() {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "GET",
            request_URI: "lookup/entitylist",
            request_BODY: ""
        };
        return this._HttpCallServieService_.api(postData);
    }
}
LookupService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LookupService_Factory() { return new LookupService(i0.ɵɵinject(HttpCallServieService)); }, token: LookupService, providedIn: "root" });
LookupService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
LookupService.ctorParameters = () => [
    { type: HttpCallServieService }
];

class OnFailService {
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
OnFailService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OnFailService_Factory() { return new OnFailService(i0.ɵɵinject(i3.ToastrService), i0.ɵɵinject(LoginService)); }, token: OnFailService, providedIn: "root" });
OnFailService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OnFailService.ctorParameters = () => [
    { type: ToastrService },
    { type: LoginService }
];

class RequestOptionsService extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.set('Content-Type', 'application/json');
        this.headers.set("grant_type", "password");
    }
    merge(options) {
        const newOptions = super.merge(options);
        if (options.url) {
            if (options.url.search("/USERLOGIN/") !== -1) {
                var token = JSON.parse(localStorage.getItem(setting$1.application_ID)).basic_Token_;
            }
            else {
                var token = JSON.parse(localStorage.getItem(setting$1.application_ID)).access_token;
            }
            newOptions.headers.set('authorization', `bearer ${token}`);
            return newOptions;
        }
        else {
            newOptions.headers.set('authorization', `bearer ${JSON.parse(localStorage.getItem(setting$1.application_ID)).access_token}`);
            return newOptions;
        }
    }
}

class SidebarService {
    constructor(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.LoggedUserId = this.loginService.loaddetail();
        this.BaseUrl = this.loginService.loaddetail().oauthservice_PATH;
    }
    userprivileges() {
        return this.http.post(this.BaseUrl + "login/userprivileges", { application_ID: this.loginService.loaddetail().application_ID }, {
            headers: new Headers({
                "Content-Type": "application/json",
                grant_type: "password",
                authorization: "bearer " + this.loginService.loaddetail().basic_Token_
            })
        }).pipe(map(res => res.json()));
    }
}
SidebarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SidebarService_Factory() { return new SidebarService(i0.ɵɵinject(i1.Http), i0.ɵɵinject(LoginService)); }, token: SidebarService, providedIn: "root" });
SidebarService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
SidebarService.ctorParameters = () => [
    { type: Http },
    { type: LoginService }
];

/*
 * Public API Surface of locationlibrary
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GetaddressService, HttpCallServieService, HttpErrorInterceptor, LocationComponent, LocationService, LocationleveltypeComponent, LocationleveltypeService, LocationlibraryComponent, LocationlibraryModule, LocationlibraryService, LocationsearchfilterComponent, LoginService, LookupService, OnFailService, RequestOptionsService, SidebarService };
//# sourceMappingURL=locationlibrary.js.map
