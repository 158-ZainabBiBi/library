(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('@angular/common/http'), require('@ng-select/ng-select'), require('devextreme-angular'), require('ngx-icon-picker'), require('ngx-toastr'), require('@angular/http'), require('projects/locationlibrary/src/lib/services/http-call-servie.service'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('locationlibrary', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/forms', '@angular/common/http', '@ng-select/ng-select', 'devextreme-angular', 'ngx-icon-picker', 'ngx-toastr', '@angular/http', 'projects/locationlibrary/src/lib/services/http-call-servie.service', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.locationlibrary = {}, global.ng.core, global.ng.common, global.ng.router, global.ng.forms, global.ng.common.http, global.ngSelect, global.devextremeAngular, global.ngxIconPicker, global.i3, global.ng.http, global.httpCallServie_service, global.rxjs.operators));
})(this, (function (exports, i0, common, i2, forms, http, ngSelect, devextremeAngular, ngxIconPicker, i3, i1, httpCallServie_service, operators) { 'use strict';

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
        /*
          AppsStorePath: "http://apps.kbfood.services/#/",
          LoginAppPath: "http://accounts.kbfood.services/#/",
          application_ID: "LocationManagement",
      
          companyName: 'Compuwiz Technologies',
          companyShortName: 'CWizTech',
          logo: 'http://kbfood.services/design/images/logo.png',
          logo1white: 'http://kbfood.services/design/images/logo-short.png',
          loginBanner1: 'http://kbfood.services/design/images/intro-back.jpeg',
          icon: 'http://kbfood.services/design/images/favicon.ico',
      
      
      
          AppsStorePath: "http://apps.magnatechhub.com/#/",
          LoginAppPath: "http://accounts.magnarouting.com/#/",
          application_ID: "LocationManagement",
      
          companyName: 'Compuwiz Technologies',
          companyShortName: 'CWizTech',
          logo: 'http://accounts.magnarouting.com/assets/images/applications/logo.png',
          logo1white: 'http://accounts.magnarouting.com/assets/images/applications/logo.png',
          loginBanner1: 'http://accounts.magnarouting.com/assets/images/applications/logo.png',
          icon: 'http://accounts.magnarouting.com/assets/images/applications/favicon.ico',
      
       AppsStorePath: "http://apps.cwiztech.com/#/",
          LoginAppPath: "http://accounts.cwiztech.com/#/",
          application_ID: "LocationManagement",
      
          companyName: 'Compuwiz Technologies',
          companyShortName: 'CWizTech',
          logo: 'http://cwiztech.com/design/images/logo.png',
          logo1white: 'http://cwiztech.com/design/images/logo-short.png',
          loginBanner1: 'http://cwiztech.com/design/images/intro-back.jpeg',
          icon: 'http://cwiztech.com/design/images/favicon.ico',
      
          
      
      
          AppsStorePath: "http://sms.jca.ac.uk/apps/#/",
          LoginAppPath: "http://sms.jca.ac.uk/oauthlogin2/#/",
          application_ID: "LocationManagement",
      
          companyName: 'JCA - London Fashion Academy',
          companyShortName: 'JCA',
          logo: 'http://sms.jca.ac.uk/jcadesign/images/logo.png',
          logo1white: 'http://sms.jca.ac.uk/jcadesign/images/logo-short.png',
          loginBanner1: 'http://sms.jca.ac.uk/jcadesign/images/intro-back.png',
          icon: 'http://sms.jca.ac.uk/jcadesign/images/favicon.ico',
      
      
      
          AppsStorePath: "http://uog.apps.cwiztech.com/#/",
          LoginAppPath: "http://uog.accounts.cwiztech.com/#/",
          application_ID: "LocationManagementDev",
      
          companyName: 'University of Gujrat',
          companyShortName: 'UOG',
          logo: 'https://uog.edu.pk/uog/upload/events/logo_e.jpg',
          logo1white: 'https://uog.edu.pk/uog/upload/events/logo_e.jpg',
          loginBanner1: 'http://cwiztech.com/design/images/intro-back.jpeg',
          icon: 'http://cwiztech.com/design/images/favicon.ico',
      
        */
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
                localStorage.setItem(setting.application_ID, JSON.stringify(user));
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
            var getUser = localStorage.getItem(setting.application_ID);
            this.user = JSON.parse(getUser);
            return this.user;
        };
        LoginService.prototype.logout = function () {
            localStorage.removeItem(setting.application_ID);
            localStorage.removeItem("access_token");
            window.location.assign(setting.LoginAppPath + "logout?application_ID=" + setting.application_ID);
            return true;
        };
        LoginService.prototype.logged = function () {
            var getUser = localStorage.getItem(setting.application_ID);
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
        { type: httpCallServie_service.HttpCallServieService }
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
        { type: httpCallServie_service.HttpCallServieService }
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
        { type: OnFailService },
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
        { type: OnFailService }
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
        { type: OnFailService }
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
                        forms.FormsModule,
                        ngSelect.NgSelectModule,
                        common.CommonModule,
                        devextremeAngular.DxMenuModule,
                        devextremeAngular.DxRangeSelectorModule,
                        devextremeAngular.DxPopupModule,
                        devextremeAngular.DxChartModule,
                        devextremeAngular.DxPieChartModule,
                        devextremeAngular.DxVectorMapModule,
                        devextremeAngular.DxDataGridModule,
                        devextremeAngular.DxBulletModule,
                        devextremeAngular.DxButtonModule,
                        devextremeAngular.DxCheckBoxModule,
                        devextremeAngular.DxSelectBoxModule,
                        devextremeAngular.DxDropDownButtonModule,
                        ngxIconPicker.IconPickerModule,
                    ],
                    exports: [LocationlibraryComponent]
                },] }
    ];
    LocationlibraryModule.ctorParameters = function () { return []; };

    /*
     * Public API Surface of locationlibrary
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LocationlibraryComponent = LocationlibraryComponent;
    exports.LocationlibraryModule = LocationlibraryModule;
    exports.LocationlibraryService = LocationlibraryService;
    exports["ɵa"] = LocationComponent;
    exports["ɵb"] = LocationService;
    exports["ɵc"] = LocationleveltypeService;
    exports["ɵd"] = OnFailService;
    exports["ɵe"] = LoginService;
    exports["ɵf"] = LocationleveltypeComponent;
    exports["ɵg"] = LocationsearchfilterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=locationlibrary.umd.js.map
