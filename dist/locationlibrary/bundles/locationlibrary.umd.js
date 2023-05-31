(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('ngx-toastr'), require('projects/locationlibrary/src/lib/services/on-fail.service'), require('projects/locationlibrary/src/lib/services/http-call-service.service'), require('@angular/http'), require('rxjs/operators'), require('projects/locationlibrary/src/lib/setting'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('locationlibrary', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/common/http', 'ngx-toastr', 'projects/locationlibrary/src/lib/services/on-fail.service', 'projects/locationlibrary/src/lib/services/http-call-service.service', '@angular/http', 'rxjs/operators', 'projects/locationlibrary/src/lib/setting', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.locationlibrary = {}, global.ng.core, global.ng.common, global.ng.router, global.ng.common.http, global.i3, global.onFailService, global.httpCallService, global.ng.http, global.rxjs.operators, global.setting, global.rxjs));
})(this, (function (exports, i0, common, i2, http, i3, onFail_service, httpCallService_service, i1, operators, setting$1, rxjs) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var LocationlibraryService = /** @class */ (function () {
        function LocationlibraryService() {
        }
        return LocationlibraryService;
    }());
    LocationlibraryService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function LocationlibraryService_Factory() { return new LocationlibraryService(); }, token: LocationlibraryService, providedIn: "root" });
    LocationlibraryService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LocationlibraryService.ctorParameters = function () { return []; };

    var LocationlibraryComponent = /** @class */ (function () {
        function LocationlibraryComponent() {
        }
        LocationlibraryComponent.prototype.ngOnInit = function () {
        };
        return LocationlibraryComponent;
    }());
    LocationlibraryComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-locationlibrary',
                    template: "\n    <p>\n      locationlibrary works!\n    </p>\n  "
                },] }
    ];
    LocationlibraryComponent.ctorParameters = function () { return []; };

    var setting = {
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

    var LoginService = /** @class */ (function () {
        function LoginService(http, _router, _toastr) {
            this.http = http;
            this._router = _router;
            this._toastr = _toastr;
        }
        LoginService.prototype.saveToken = function (token) {
            if (token) {
                localStorage.setItem("access_token", token);
                return true;
            }
            else {
                return false;
            }
        };
        LoginService.prototype.saveDetail = function (user) {
            if (user) {
                localStorage.setItem(setting$1.setting.application_ID, JSON.stringify(user));
                return true;
            }
            else {
                return false;
            }
        };
        LoginService.prototype.loadToken = function () {
            var token = localStorage.getItem("access_token");
            this.authToken = token;
        };
        LoginService.prototype.loaddetail = function () {
            var getUser = localStorage.getItem(setting$1.setting.application_ID);
            this.user = JSON.parse(getUser);
            return this.user;
        };
        LoginService.prototype.logout = function () {
            localStorage.removeItem(setting$1.setting.application_ID);
            localStorage.removeItem("access_token");
            window.location.assign(setting$1.setting.LoginAppPath + "logout?application_ID=" + setting$1.setting.application_ID);
            return true;
        };
        LoginService.prototype.logged = function () {
            var getUser = localStorage.getItem(setting$1.setting.application_ID);
            var _application_name_access_token_ = localStorage.getItem("access_token");
            if (getUser && _application_name_access_token_) {
                return true;
            }
            else {
                return false;
            }
        };
        return LoginService;
    }());
    LoginService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function LoginService_Factory() { return new LoginService(i0__namespace.ɵɵinject(i1__namespace.Http), i0__namespace.ɵɵinject(i2__namespace.Router), i0__namespace.ɵɵinject(i3__namespace.ToastrService)); }, token: LoginService, providedIn: "root" });
    LoginService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    LoginService.ctorParameters = function () { return [
        { type: i1.Http },
        { type: i2.Router },
        { type: i3.ToastrService }
    ]; };

    var HttpCallServieService = /** @class */ (function () {
        function HttpCallServieService(http, loginService) {
            this.http = http;
            this.loginService = loginService;
            this.BaseUrl = this.loginService.loaddetail().applicationservice_PATH;
            this.AuthUrl = this.loginService.loaddetail().oauthservice_PATH;
        }
        HttpCallServieService.prototype.api = function (postData) {
            return this.http.post(this.BaseUrl + "apigateway", postData).pipe(operators.map(function (res) { return res.json(); }));
        };
        return HttpCallServieService;
    }());
    HttpCallServieService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function HttpCallServieService_Factory() { return new HttpCallServieService(i0__namespace.ɵɵinject(i1__namespace.Http), i0__namespace.ɵɵinject(LoginService)); }, token: HttpCallServieService, providedIn: "root" });
    HttpCallServieService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    HttpCallServieService.ctorParameters = function () { return [
        { type: i1.Http },
        { type: LoginService }
    ]; };

    var LocationleveltypeService = /** @class */ (function () {
        function LocationleveltypeService(_HttpCallServieService_) {
            this._HttpCallServieService_ = _HttpCallServieService_;
        }
        LocationleveltypeService.prototype.get = function () {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "GET",
                request_URI: "lookup",
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.getAll = function () {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "GET",
                request_URI: "lookup/all",
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.getOne = function (id) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "GET",
                request_URI: "lookup/" + id,
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.add = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "lookup",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.update = function (data, id) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "PUT",
                request_URI: "lookup/" + id,
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.delete = function (id) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "DELETE",
                request_URI: "lookup/" + id,
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.search = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "lookup/search",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.searchAll = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "lookup/search/all",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.advancedSearch = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "lookup/advancedsearch",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.advancedSearchAll = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "lookup/advancedsearch/all",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.lookup = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "lookup/entity",
                request_BODY: JSON.stringify({ entityname: data })
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationleveltypeService.prototype.entityList = function () {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "GET",
                request_URI: "lookup/entitylist",
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        return LocationleveltypeService;
    }());
    LocationleveltypeService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function LocationleveltypeService_Factory() { return new LocationleveltypeService(i0__namespace.ɵɵinject(HttpCallServieService)); }, token: LocationleveltypeService, providedIn: "root" });
    LocationleveltypeService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    LocationleveltypeService.ctorParameters = function () { return [
        { type: httpCallService_service.HttpCallServieService }
    ]; };

    var LocationService = /** @class */ (function () {
        function LocationService(_HttpCallServieService_) {
            this._HttpCallServieService_ = _HttpCallServieService_;
        }
        LocationService.prototype.get = function () {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "GET",
                request_URI: "location",
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationService.prototype.getAll = function () {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "GET",
                request_URI: "location/all",
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationService.prototype.getOne = function (id) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "GET",
                request_URI: "location/" + id,
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationService.prototype.add = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "location",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationService.prototype.update = function (data, id) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "PUT",
                request_URI: "location/" + id,
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationService.prototype.delete = function (id) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "DELETE",
                request_URI: "location/" + id,
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationService.prototype.search = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "location/search",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationService.prototype.searchAll = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "location/search/all",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationService.prototype.advancedSearch = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "location/advancedsearch",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationService.prototype.advancedSearchAll = function (data) {
            var postData = {
                service_NAME: setting.locationservice_NAME,
                request_TYPE: "POST",
                request_URI: "location/advancedsearch/all",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LocationService.prototype.getAllDetail = function (response) {
            for (var a = 0; a < response.length; a++) {
                response[a].locationleveltype = response[a].locationleveltype_ID.code + " - " + response[a].locationleveltype_ID.description;
            }
            return (response);
        };
        LocationService.prototype.getDetail = function (response) {
            response.locationleveltype = response.locationleveltype_ID.code + " - " + response.locationleveltype_ID.description;
            if (response.isactive == "Y") {
                response.isactive = true;
            }
            else {
                response.isactive = false;
            }
            return (response);
        };
        return LocationService;
    }());
    LocationService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function LocationService_Factory() { return new LocationService(i0__namespace.ɵɵinject(HttpCallServieService)); }, token: LocationService, providedIn: "root" });
    LocationService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    LocationService.ctorParameters = function () { return [
        { type: httpCallService_service.HttpCallServieService }
    ]; };

    var LocationComponent = /** @class */ (function () {
        function LocationComponent(locationservice, locationleveltypeservice, toastrservice, onfailservice, router) {
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
            this.edit = new i0.EventEmitter();
            this.cancel = new i0.EventEmitter();
            this.selectedLocation = new i0.EventEmitter();
            this.viewLocation = new i0.EventEmitter();
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
        LocationComponent.prototype.ngOnInit = function () {
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
        };
        LocationComponent.prototype.onToolbarPreparing = function (e) {
            e.toolbarOptions.items.unshift({
                location: 'after',
                widget: 'dxButton',
                options: {
                    width: 136,
                    text: 'Refresh',
                    onClick: this.locationGetAll.bind(this),
                },
            });
        };
        LocationComponent.prototype.add = function () {
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
        };
        LocationComponent.prototype.update = function (row) {
            this.edit.next(row);
        };
        LocationComponent.prototype.viewlocation = function (row) {
            this.viewLocation.next(row);
        };
        LocationComponent.prototype.changeLocation = function (location) {
            for (var i = 0; i < this.locationsAll.length; i++) {
                if (location == this.locationsAll[i].location_ID)
                    this.selectedLocation.next(this.locationsAll[i]);
            }
        };
        LocationComponent.prototype.searchLocation = function (locationleveltype, locationparent) {
            this.locationleveltypeID = locationleveltype;
            this.locationparentID = locationparent;
            this.search = {
                locationleveltype_ID: this.locationleveltypeID,
                locationparent_ID: this.locationparentID
            };
            this.locationGetAdvancedSearchAll(this.search);
        };
        LocationComponent.prototype.refreshLocation = function () {
            this.locationGetAdvancedSearchAll(this.search);
        };
        LocationComponent.prototype.locationEdit = function () {
            this.disabled = false;
        };
        LocationComponent.prototype.locationCancel = function () {
            this.disabled = true;
            if (this.location.location_ID == 0) {
                this.router.navigate(["/home/locations"], {});
            }
        };
        LocationComponent.prototype.setlocations = function (response) {
            if (this.view == 1) {
                this.locations = response;
                window.sessionStorage.setItem("locations", JSON.stringify(this.locations));
            }
            else {
                this.locationsAll = response;
                window.sessionStorage.setItem("locationsAll", JSON.stringify(this.locationsAll));
            }
            this.cancel.next();
        };
        LocationComponent.prototype.locationGet = function () {
            var _this = this;
            this.locationservice.get().subscribe(function (response) {
                if (response) {
                    if (response.error && response.status) {
                        _this.toastrservice.warning("Message", " " + response.message);
                    }
                    else {
                        response = _this.locationservice.getAllDetail(response);
                        _this.setlocations(response);
                    }
                }
            }, function (error) {
                _this.onfailservice.onFail(error);
            });
        };
        LocationComponent.prototype.locationGetAll = function () {
            var _this = this;
            this.locationservice.getAll().subscribe(function (response) {
                if (response) {
                    if (response.error && response.status) {
                        _this.toastrservice.warning("Message", " " + response.message);
                    }
                    else {
                        response = _this.locationservice.getAllDetail(response);
                        _this.setlocations(response);
                    }
                }
            }, function (error) {
                _this.onfailservice.onFail(error);
            });
        };
        LocationComponent.prototype.locationGetOne = function (id) {
            var _this = this;
            this.locationservice.getOne(id).subscribe(function (response) {
                if (response) {
                    if (response.error && response.status) {
                        _this.toastrservice.warning("Message", " " + response.message);
                    }
                    else {
                        response = _this.locationservice.getDetail(response);
                        _this.location = response;
                        _this.disabled = true;
                        _this.selectedLocation.next(response);
                    }
                }
            }, function (error) {
                _this.onfailservice.onFail(error);
            });
        };
        LocationComponent.prototype.locationGetAdvancedSearchAll = function (search) {
            var _this = this;
            this.locationservice.advancedSearchAll(search).subscribe(function (response) {
                if (response) {
                    if (response.error && response.status) {
                        _this.toastrservice.warning("Message", " " + response.message);
                    }
                    else {
                        response = _this.locationservice.getAllDetail(response);
                        _this.setlocations(response);
                    }
                }
            }, function (error) {
                _this.onfailservice.onFail(error);
            });
        };
        LocationComponent.prototype.locationAdd = function (location) {
            var _this = this;
            location.locationleveltype_ID = this.locationleveltype.locationleveltypeID;
            location.locationparent_ID = this.locationsearchfilter.searchfilterID();
            this.locationservice.add(location).subscribe(function (response) {
                if (response) {
                    if (response.error && response.status) {
                        _this.toastrservice.warning("Message", " " + response.message);
                    }
                    else if (response.location_ID) {
                        _this.toastrservice.success("Success", "New Location Added");
                        _this.locationGetAll();
                    }
                    else {
                        _this.toastrservice.error("Some thing went wrong");
                    }
                }
            }, function (error) {
                _this.onfailservice.onFail(error);
            });
        };
        LocationComponent.prototype.locationUpdate = function (location) {
            var _this = this;
            location.locationleveltype_ID = this.locationleveltype.locationleveltypeID;
            location.locationparent_ID = this.editlocation.locationID;
            console.log(location);
            if (location.isactive == true) {
                location.isactive = "Y";
            }
            else {
                location.isactive = "N";
            }
            this.locationservice.update(location, location.location_ID).subscribe(function (response) {
                if (response) {
                    if (response.error && response.status) {
                        _this.toastrservice.warning("Message", " " + response.message);
                    }
                    else if (response.location_ID) {
                        _this.toastrservice.success("Success", " Location Updated");
                        _this.locationGetAll();
                    }
                    else {
                        _this.toastrservice.error("Some thing went wrong");
                    }
                }
            }, function (error) {
                _this.onfailservice.onFail(error);
            });
        };
        LocationComponent.prototype.locationleveltypeGetOne = function (id) {
            var _this = this;
            this.locationleveltypeservice.getOne(id).subscribe(function (response) {
                if (response) {
                    if (response.error && response.status) {
                        _this.toastrservice.warning("Message", " " + response.message);
                    }
                    else {
                        _this.locationleveltypeLABEL = response.description;
                    }
                }
            }, function (error) {
                _this.onfailservice.onFail(error);
            });
        };
        return LocationComponent;
    }());
    LocationComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-location',
                    template: "<div *ngIf=\"view==1\" class=\"form-group\">\r\n    <label class=\"custom-label form-label\">Location\r\n      <span style=\"color: red;\" [hidden]=\"disabled\" *ngIf=\"iscompulsory==true\">*</span>\r\n  </label>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <ng-select [(ngModel)]=\"locationID\" [disabled]=\"disabled\" name=\"locationID\">\r\n                <ng-option *ngFor=\"let location of locations\" [value]=\"location.location_ID\" [disabled]=\"disabled\">\r\n                    {{ location.location_CODE }} - {{ location.location_NAME }}\r\n                </ng-option>\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn btn-light ml-2\" [hidden]=\"disabled\" (click)=\"locationGet()\">\r\n              <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==2\" class=\"form-group\">\r\n    <div class=\"outer-div\">\r\n        <div class=\"grid-wrapper\">\r\n            <dx-data-grid #grid id=\"gridContainer\" [dataSource]=\"locationsAll\" keyExpr=\"location_ID\" [showColumnLines]=\"true\" [showRowLines]=\"true\" [showBorders]=\"true\" [rowAlternationEnabled]=\"true\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"30\"\r\n                [columnAutoWidth]=\"true\" [remoteOperations]=\"true\" height=\"600\" width=\"100%\"\r\n                (onToolbarPreparing)=\"onToolbarPreparing($event)\">\r\n                <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n                <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n                <dxo-search-panel [visible]=\"true\"></dxo-search-panel>\r\n                <dxo-group-panel [visible]=\"false\"></dxo-group-panel>\r\n                <dxo-grouping #expand [autoExpandAll]=\"false\"></dxo-grouping>\r\n                <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n                <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n                <dxo-selection mode=\"single\"></dxo-selection>\r\n                <dxi-column [width]=\"75\" [allowFiltering]=\"false\" [allowSorting]=\"false\" alignment=\"center\" cellTemplate=\"cellTemplate\"></dxi-column>\r\n                <dxi-column [width]=\"120\" dataField=\"location_CODE\" caption=\"Code\" cssClass=\"myClass\" alignment=\"center\"></dxi-column>\r\n                <dxi-column [width]=\"300\" dataField=\"location_NAME\" caption=\"Name\" cssClass=\"myClass\" alignment=\"left\"></dxi-column>\r\n                <dxi-column dataField=\"location_DESC\" caption=\"Description\" cssClass=\"myClass\" alignment=\"left\"></dxi-column>\r\n                <dxi-column [width]=\"300\" dataField=\"locationparent_ID.location_NAME\" caption=\"Parent Location\" cssClass=\"myClass\" alignment=\"center\"></dxi-column>\r\n                <dxi-column [width]=\"300\" dataField=\"locationleveltype\" caption=\"Level Type\" cssClass=\"myClass\" alignment=\"center\"></dxi-column>\r\n                <dxi-column [width]=\"100\" dataField=\"isactive\" caption=\"Active\" cssClass=\"myClass\" alignment=\"center\"></dxi-column>\r\n\r\n                <div *dxTemplate=\"let data of 'cellTemplate'\">\r\n                    <a href=\"javascript:void\" class=\"\" (click)=\"viewlocation(data)\">\r\n                        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i></a>\r\n                </div>\r\n            </dx-data-grid>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==3\" class=\"form-group\">\r\n    <form action=\"\" class=\"form\" (ngSubmit)=\"f.form.valid && locationAdd(location)\" #f=\"ngForm\" novalidate>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Code <span style=\"color:red\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"location_CODE\" [(ngModel)]=\"location.location_CODE\" maxlength=\"50\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Name <span style=\"color:red\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"location_NAME\" [(ngModel)]=\"location.location_NAME\" maxlength=\"50\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                        <app-locationleveltype #locationleveltype [iscompulsory]=\"true\" [locationleveltypeID]=\"location.locationleveltype_ID\"></app-locationleveltype>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <app-location #addlocation [view]=\"1\"></app-location>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Description</label>\r\n                        <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"location.location_DESC\" name=\"location_DESC\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">\r\n              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div *ngIf=\"view==4\" class=\"form-group\">\r\n    <form action=\"\" class=\"form\" (ngSubmit)=\"f.form.valid && locationUpdate(location)\" #f=\"ngForm\" novalidate>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Code <span style=\"color:red\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"location_CODE\" [(ngModel)]=\"location.location_CODE\" maxlength=\"50\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Name <span style=\"color:red\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"location_NAME\" [(ngModel)]=\"location.location_NAME\" maxlength=\"50\" required>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <app-locationleveltype #locationleveltype [iscompulsory]=\"true\" [locationleveltypeID]=\"location.locationleveltype_ID\"></app-locationleveltype>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <app-location #editlocation [view]=\"1\" [locationID]=\"location.locationparent_ID\"></app-location>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\"> Location Description</label>\r\n                        <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"location.location_DESC\" name=\"location_DESC\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"checkbox\">\r\n                            <label class=\"control-label\">\r\n                              <input type=\"checkbox\" [checked]=\"location.isactive\"\r\n                                  [(ngModel)]=\"location.isactive\" name=\"isactive\">\r\n                              Active\r\n                          </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">\r\n              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Update\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div *ngIf=\"view==5\" class=\"form-group\">\r\n    <div class=\"modal-body\">\r\n        <app-locationsearchfilter #locationsearchfilter [issearchfilter]=false *ngIf=\"disabled==false\"></app-locationsearchfilter>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\"> Location Code\r\n                        <span style=\"color: red;\" [hidden]=\"disabled\">*</span>\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"location_CODE\" [(ngModel)]=\"location.location_CODE\" [disabled]='disabled' required>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\"> Location Name\r\n                        <span style=\"color: red;\" [hidden]=\"disabled\">*</span>\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"location_NAME\" [(ngModel)]=\"location.location_NAME\" [disabled]='disabled' required>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <app-locationleveltype #locationleveltype [disabled]='disabled' [locationleveltypeID]=\"location.locationleveltype_ID.id\"></app-locationleveltype>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"location.location_ID!=0\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Location Parent</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"locationparent_ID\" [(ngModel)]=\"location.locationparent_ID.location_NAME\" [disabled]=true>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\"> Location Description</label>\r\n                    <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"location.location_DESC\" name=\"location_DESC\" [disabled]='disabled'></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"location.location_ID!=0\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Latitude</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"latitude\" [(ngModel)]=\"location.latitude\" [disabled]='disabled'>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Longitude</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"longitude\" [(ngModel)]=\"location.longitude\" [disabled]='disabled'>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Altitude</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"altitude\" [(ngModel)]=\"location.altitude\" [disabled]='disabled'>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\"><br /><br />\r\n                    <div class=\"checkbox\">\r\n                        <label class=\"control-label\">\r\n                            <input type=\"checkbox\" [checked]=\"location.isactive\"\r\n                                [(ngModel)]=\"location.isactive\" [disabled]='disabled' name=\"isactive\">\r\n                            Active\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3\">\r\n                <button *ngIf=\"location.location_ID!=0 && disabled==true\" (click)=\"locationEdit()\" id=\"cancel\" class=\"btn btn-primary\"\r\n                    style=\"float: right;\"> Edit\r\n                </button>\r\n                <button *ngIf=\"disabled==false\" type=\"button\" (click)='locationCancel()' style=\"float: right;\"\r\n                    class=\"btn btn-light\" data-dismiss=\"modal\"> Cancel\r\n                </button>\r\n                <button *ngIf=\"location.location_ID!=0 && disabled==false\" type=\"button\" data-dismiss=\"modal\"\r\n                    style=\" margin-right: 10px; float: right;\" (click)='locationUpdate(location)'\r\n                    class=\"btn btn-primary\">\r\n                    Update\r\n                </button>\r\n                <button *ngIf=\"location.location_ID==0\" type=\"button\" data-dismiss=\"modal\"\r\n                    style=\" margin-right: 10px; float: right;\" (click)='locationAdd(location)'\r\n                    class=\"btn btn-primary\">\r\n                    Save\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==6\" class=\"form-group\">\r\n    <label *ngIf=\"isshowlables==true\" class=\"custom-label form-label\"> {{ locationleveltypeLABEL }}\r\n      <span style=\"color: red;\" [hidden]=\"disabled\" *ngIf=\"iscompulsory==true\">*</span>\r\n  </label>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <ng-select [(ngModel)]=\"locationID\" [disabled]=\"disabled\" name=\"locationID\" (change)=\"changeLocation($event)\">\r\n                <ng-option *ngFor=\"let location of locationsAll\" [value]=\"location.location_ID\" [disabled]=\"disabled\">\r\n                    {{ location.location_CODE }} - {{ location.location_NAME }}\r\n                </ng-option>\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn btn-light ml-2\" [hidden]=\"disabled\" (click)=\"refreshLocation()\">\r\n              <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                    styles: [""]
                },] }
    ];
    LocationComponent.ctorParameters = function () { return [
        { type: LocationService },
        { type: LocationleveltypeService },
        { type: i3.ToastrService },
        { type: onFail_service.OnFailService },
        { type: i2.Router }
    ]; };
    LocationComponent.propDecorators = {
        locationleveltype: [{ type: i0.ViewChild, args: ["locationleveltype",] }],
        locationsearchfilter: [{ type: i0.ViewChild, args: ["locationsearchfilter",] }],
        addlocation: [{ type: i0.ViewChild, args: ["addlocation",] }],
        editlocation: [{ type: i0.ViewChild, args: ["editlocation",] }],
        view: [{ type: i0.Input }],
        iscompulsory: [{ type: i0.Input }],
        isshowlables: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        all: [{ type: i0.Input }],
        locationID: [{ type: i0.Input }],
        locationleveltypeID: [{ type: i0.Input }],
        locationparentID: [{ type: i0.Input }],
        edit: [{ type: i0.Output }],
        cancel: [{ type: i0.Output }],
        selectedLocation: [{ type: i0.Output }],
        viewLocation: [{ type: i0.Output }]
    };

    var LocationsearchfilterComponent = /** @class */ (function () {
        function LocationsearchfilterComponent(locationleveltypeservice, toastrservice, onfailservice) {
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
            this.advancedSearch = new i0.EventEmitter();
            this.locationleveltypes = [];
            this.search = {
                locationparent_ID: null
            };
        }
        LocationsearchfilterComponent.prototype.ngOnInit = function () {
            this.locationleveltypeGet();
        };
        LocationsearchfilterComponent.prototype.searchfilter = function () {
            var _this = this;
            this.locations.forEach(function (child) {
                if (child.locationID != null)
                    _this.search.locationparent_ID = child.locationID;
            });
            this.advancedSearch.next(this.search);
        };
        LocationsearchfilterComponent.prototype.searchfilterID = function () {
            var locationID;
            this.locations.forEach(function (child) {
                if (child.locationID != null)
                    locationID = child.locationID;
            });
            return locationID;
        };
        LocationsearchfilterComponent.prototype.reset = function () {
        };
        LocationsearchfilterComponent.prototype.setLocation = function (locations) {
            var _this = this;
            locations.reverse();
            locations.forEach(function (location) {
                _this.locations.forEach(function (child) {
                    if (child.locationleveltypeID == location.locationleveltype_ID.id)
                        child.locationID = location.location_ID;
                    child.locationGetOne(location.location_ID);
                });
            });
        };
        LocationsearchfilterComponent.prototype.selectedLocation = function (location) {
            var _this = this;
            var found = false;
            this.locations.forEach(function (child) {
                if (found == true) {
                    child.searchLocation(child.locationleveltypeID, location.location_ID);
                    found = false;
                    _this.locationID = location.location_ID;
                }
                if (child.locationleveltypeID == location.locationleveltype_ID.id)
                    found = true;
            });
            this.locationID = location.location_ID;
        };
        LocationsearchfilterComponent.prototype.locationleveltypeGet = function () {
            var _this = this;
            this.locationleveltypeservice.lookup("LOCATIONLEVELTYPE").subscribe(function (response) {
                if (response) {
                    if (response.error && response.status) {
                        _this.toastrservice.warning("Message", " " + response.message);
                    }
                    else {
                        response[0].locationparentID = null;
                        _this.locationleveltypes.push(response[0]);
                        for (var a = 1; a < response.length; a++) {
                            response[a].locationparentID = -1;
                            if (response[a].code <= _this.locationtypeID)
                                _this.locationleveltypes.push(response[a]);
                        }
                        //          this.locationleveltypes = response;
                    }
                }
            }, function (error) {
                _this.onfailservice.onFail(error);
            });
        };
        return LocationsearchfilterComponent;
    }());
    LocationsearchfilterComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-locationsearchfilter',
                    template: "<div *ngIf=\"view==1\" class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card-primary card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"align-items-center row\">\r\n                    <div class=\"col\">\r\n                        <a href=\"javascript:void\" aria-controls=\"collapse-customerinfo1\" aria-expanded=\"true\"\r\n                            class=\"card-title\">Filter\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\" *ngFor=\"let locationleveltype of locationleveltypes\">\r\n                        <app-location #locations [view]=\"6\" [locationleveltypeID]=\"locationleveltype.id\"\r\n                            [locationparentID]=\"locationleveltype.locationparentID\"\r\n                            (selectedLocation)=\"selectedLocation($event)\"></app-location>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"issearchfilter==true\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group text-right\">\r\n                            <button id=\"savebutton\" class=\"btn btn-success ml-2\" (click)=\"searchfilter()\">\r\n                                Search\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-light ml-2\" (click)=\"reset()\">\r\n                                Reset\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==2\" class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\" *ngFor=\"let locationleveltype of locationleveltypes\">\r\n                <app-location #locations [view]=\"6\" [disabled]='disabled' [locationleveltypeID]=\"locationleveltype.id\"\r\n                    [locationparentID]=\"locationleveltype.locationparentID\"\r\n                    (selectedLocation)=\"selectedLocation($event)\"></app-location>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==3\" class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\" *ngFor=\"let locationleveltype of locationleveltypes\">\r\n                <app-location #locations [view]=\"6\" [disabled]='disabled' [locationleveltypeID]=\"locationleveltype.id\"\r\n                    [locationparentID]=\"locationleveltype.locationparentID\"\r\n                    (selectedLocation)=\"selectedLocation($event)\"></app-location>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"view==4\" class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\" *ngFor=\"let locationleveltype of locationleveltypes\">\r\n                <app-location #locations [view]=\"6\" [disabled]='disabled' [isshowlables]=\"isshowlables\" [locationleveltypeID]=\"locationleveltype.id\"\r\n                    [locationparentID]=\"locationleveltype.locationparentID\"\r\n                    (selectedLocation)=\"selectedLocation($event)\"></app-location>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                    styles: [""]
                },] }
    ];
    LocationsearchfilterComponent.ctorParameters = function () { return [
        { type: LocationleveltypeService },
        { type: i3.ToastrService },
        { type: onFail_service.OnFailService }
    ]; };
    LocationsearchfilterComponent.propDecorators = {
        locations: [{ type: i0.ViewChildren, args: [LocationComponent,] }],
        view: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        issearchfilter: [{ type: i0.Input }],
        isshowlables: [{ type: i0.Input }],
        locationtypeID: [{ type: i0.Input }],
        locationID: [{ type: i0.Input }],
        locationsearchfilterID: [{ type: i0.Input }],
        advancedSearch: [{ type: i0.Output }]
    };

    var LocationleveltypeComponent = /** @class */ (function () {
        function LocationleveltypeComponent(locationleveltypeservice, toastrservice, onfailservice) {
            this.locationleveltypeservice = locationleveltypeservice;
            this.toastrservice = toastrservice;
            this.onfailservice = onfailservice;
            this.iscompulsory = false;
            this.disabled = false;
            this.all = false;
            this.locationleveltypeID = null;
            this.locationleveltypes = [];
        }
        LocationleveltypeComponent.prototype.ngOnInit = function () {
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
        };
        LocationleveltypeComponent.prototype.setLocationType = function (response) {
            this.locationleveltypes = response;
            window.sessionStorage.setItem("locationleveltypes", JSON.stringify(this.locationleveltypes));
        };
        LocationleveltypeComponent.prototype.locationleveltypeGet = function () {
            var _this = this;
            this.locationleveltypeservice.lookup("LOCATIONLEVELTYPE").subscribe(function (response) {
                if (response) {
                    if (response.error && response.status) {
                        _this.toastrservice.warning("Message", " " + response.message);
                    }
                    else {
                        _this.setLocationType(response);
                    }
                }
            }, function (error) {
                _this.onfailservice.onFail(error);
            });
        };
        return LocationleveltypeComponent;
    }());
    LocationleveltypeComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-locationleveltype',
                    template: "<div class=\"form-group\">\r\n    <label class=\"custom-label form-label\">Location Level Type\r\n        <span style=\"color: red;\" [hidden]=\"disabled\" *ngIf=\"iscompulsory==true\">*</span>\r\n    </label>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <ng-select [(ngModel)]=\"locationleveltypeID\" [disabled]=\"disabled\" name=\"locationleveltypeID\" maxlength=\"50\">\r\n                <ng-option *ngFor=\"let locationleveltype of locationleveltypes\" [value]=\"locationleveltype.id\" [disabled]=\"disabled\">\r\n                    {{ locationleveltype.code }} - {{ locationleveltype.description }}\r\n                </ng-option>\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn btn-light ml-2\" [hidden]=\"disabled\" (click)=\"locationleveltypeGet()\">\r\n                <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                    styles: [""]
                },] }
    ];
    LocationleveltypeComponent.ctorParameters = function () { return [
        { type: LocationleveltypeService },
        { type: i3.ToastrService },
        { type: onFail_service.OnFailService }
    ]; };
    LocationleveltypeComponent.propDecorators = {
        iscompulsory: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        all: [{ type: i0.Input }],
        locationleveltypeID: [{ type: i0.Input }]
    };

    var LocationlibraryModule = /** @class */ (function () {
        function LocationlibraryModule() {
        }
        LocationlibraryModule.prototype.ngOnInit = function () {
        };
        return LocationlibraryModule;
    }());
    LocationlibraryModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LocationlibraryComponent, LocationComponent, LocationleveltypeComponent, LocationsearchfilterComponent],
                    imports: [
                        i2.RouterModule,
                        http.HttpClientModule,
                        common.CommonModule,
                    ],
                    providers: [{ provide: common.LocationStrategy, useClass: common.PathLocationStrategy }],
                    exports: [LocationlibraryComponent, LocationComponent, LocationleveltypeComponent, LocationsearchfilterComponent]
                },] }
    ];
    LocationlibraryModule.ctorParameters = function () { return []; };

    var GetaddressService = /** @class */ (function () {
        function GetaddressService(_HttpCallServieService_) {
            this._HttpCallServieService_ = _HttpCallServieService_;
        }
        GetaddressService.prototype.getByPostcode = function (postcode) {
            var postData = {
                service_NAME: "GETADDRESS",
                request_TYPE: "GET",
                request_URI: "find/" + postcode + "?api-key=V4QHzniNakGufrLJgB3ROw29270&expand=true",
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        return GetaddressService;
    }());
    GetaddressService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function GetaddressService_Factory() { return new GetaddressService(i0__namespace.ɵɵinject(HttpCallServieService)); }, token: GetaddressService, providedIn: "root" });
    GetaddressService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    GetaddressService.ctorParameters = function () { return [
        { type: HttpCallServieService }
    ]; };

    var HttpErrorInterceptor = /** @class */ (function () {
        function HttpErrorInterceptor() {
        }
        HttpErrorInterceptor.prototype.intercept = function (request, next) {
            return next.handle(request).pipe(operators.retry(1), operators.catchError(function (error) {
                var errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = "Error: " + error.error.message;
                }
                else {
                    // server-side error
                    errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
                }
                return rxjs.throwError(errorMessage);
            }));
        };
        return HttpErrorInterceptor;
    }());

    var LookupService = /** @class */ (function () {
        function LookupService(_HttpCallServieService_) {
            this._HttpCallServieService_ = _HttpCallServieService_;
        }
        LookupService.prototype.get = function () {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "GET",
                request_URI: "lookup",
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.getAll = function () {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "GET",
                request_URI: "lookup/all",
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.getOne = function (id) {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "GET",
                request_URI: "lookup/" + id,
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.add = function (data) {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "POST",
                request_URI: "lookup",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.update = function (data, id) {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "PUT",
                request_URI: "lookup/" + id,
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.delete = function (id) {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "DELETE",
                request_URI: "lookup/" + id,
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.search = function (data) {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "POST",
                request_URI: "lookup/search",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.searchAll = function (data) {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "POST",
                request_URI: "lookup/search/all",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.advancedSearch = function (data) {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "POST",
                request_URI: "lookup/advancedsearch",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.advancedSearchAll = function (data) {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "POST",
                request_URI: "lookup/advancedsearch/all",
                request_BODY: JSON.stringify(data)
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.lookup = function (data) {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "POST",
                request_URI: "lookup/entity",
                request_BODY: JSON.stringify({ entityname: data })
            };
            return this._HttpCallServieService_.api(postData);
        };
        LookupService.prototype.entityList = function () {
            var postData = {
                service_NAME: setting.service_NAME,
                request_TYPE: "GET",
                request_URI: "lookup/entitylist",
                request_BODY: ""
            };
            return this._HttpCallServieService_.api(postData);
        };
        return LookupService;
    }());
    LookupService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function LookupService_Factory() { return new LookupService(i0__namespace.ɵɵinject(HttpCallServieService)); }, token: LookupService, providedIn: "root" });
    LookupService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    LookupService.ctorParameters = function () { return [
        { type: HttpCallServieService }
    ]; };

    var OnFailService = /** @class */ (function () {
        function OnFailService(_toaster, _loginService) {
            this._toaster = _toaster;
            this._loginService = _loginService;
        }
        OnFailService.prototype.onFail = function (ifFail) {
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
                var body = JSON.parse(ifFail._body);
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
        };
        return OnFailService;
    }());
    OnFailService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function OnFailService_Factory() { return new OnFailService(i0__namespace.ɵɵinject(i3__namespace.ToastrService), i0__namespace.ɵɵinject(LoginService)); }, token: OnFailService, providedIn: "root" });
    OnFailService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    OnFailService.ctorParameters = function () { return [
        { type: i3.ToastrService },
        { type: LoginService }
    ]; };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var RequestOptionsService = /** @class */ (function (_super) {
        __extends(RequestOptionsService, _super);
        function RequestOptionsService() {
            var _this = _super.call(this) || this;
            _this.headers.set('Content-Type', 'application/json');
            _this.headers.set("grant_type", "password");
            return _this;
        }
        RequestOptionsService.prototype.merge = function (options) {
            var newOptions = _super.prototype.merge.call(this, options);
            if (options.url) {
                if (options.url.search("/USERLOGIN/") !== -1) {
                    var token = JSON.parse(localStorage.getItem(setting$1.setting.application_ID)).basic_Token_;
                }
                else {
                    var token = JSON.parse(localStorage.getItem(setting$1.setting.application_ID)).access_token;
                }
                newOptions.headers.set('authorization', "bearer " + token);
                return newOptions;
            }
            else {
                newOptions.headers.set('authorization', "bearer " + JSON.parse(localStorage.getItem(setting$1.setting.application_ID)).access_token);
                return newOptions;
            }
        };
        return RequestOptionsService;
    }(i1.BaseRequestOptions));

    var SidebarService = /** @class */ (function () {
        function SidebarService(http, loginService) {
            this.http = http;
            this.loginService = loginService;
            this.LoggedUserId = this.loginService.loaddetail();
            this.BaseUrl = this.loginService.loaddetail().oauthservice_PATH;
        }
        SidebarService.prototype.userprivileges = function () {
            return this.http.post(this.BaseUrl + "login/userprivileges", { application_ID: this.loginService.loaddetail().application_ID }, {
                headers: new i1.Headers({
                    "Content-Type": "application/json",
                    grant_type: "password",
                    authorization: "bearer " + this.loginService.loaddetail().basic_Token_
                })
            }).pipe(operators.map(function (res) { return res.json(); }));
        };
        return SidebarService;
    }());
    SidebarService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function SidebarService_Factory() { return new SidebarService(i0__namespace.ɵɵinject(i1__namespace.Http), i0__namespace.ɵɵinject(LoginService)); }, token: SidebarService, providedIn: "root" });
    SidebarService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    SidebarService.ctorParameters = function () { return [
        { type: i1.Http },
        { type: LoginService }
    ]; };

    /*
     * Public API Surface of locationlibrary
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GetaddressService = GetaddressService;
    exports.HttpCallServieService = HttpCallServieService;
    exports.HttpErrorInterceptor = HttpErrorInterceptor;
    exports.LocationComponent = LocationComponent;
    exports.LocationService = LocationService;
    exports.LocationleveltypeComponent = LocationleveltypeComponent;
    exports.LocationleveltypeService = LocationleveltypeService;
    exports.LocationlibraryComponent = LocationlibraryComponent;
    exports.LocationlibraryModule = LocationlibraryModule;
    exports.LocationlibraryService = LocationlibraryService;
    exports.LocationsearchfilterComponent = LocationsearchfilterComponent;
    exports.LoginService = LoginService;
    exports.LookupService = LookupService;
    exports.OnFailService = OnFailService;
    exports.RequestOptionsService = RequestOptionsService;
    exports.SidebarService = SidebarService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=locationlibrary.umd.js.map
