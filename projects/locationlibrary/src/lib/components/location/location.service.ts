import { Injectable } from "@angular/core";
import { HttpcallService } from "../../services/httpcall.service";

@Injectable({
  providedIn: "root"
})
export class LocationService {

  constructor(
    private _HttpcallService_: HttpcallService
  ) { }

  get() {
    var postData = {
      service_NAME: "LOCATION",
      request_TYPE: "GET",
      request_URI: "location",
      request_BODY: ""
    }
    return this._HttpcallService_.api(postData);
  }

  getAll() {
    var postData = {
      service_NAME: "LOCATION",
      request_TYPE: "GET",
      request_URI: "location/all",
      request_BODY: ""
    }
    return this._HttpcallService_.api(postData);
  }

  getOne(id) {
    var postData = {
      service_NAME: "LOCATION",
      request_TYPE: "GET",
      request_URI: "location/" + id,
      request_BODY: ""
    }
    return this._HttpcallService_.api(postData);
  }

  add(data) {
    var postData = {
      service_NAME: "LOCATION",
      request_TYPE: "POST",
      request_URI: "location",
      request_BODY: JSON.stringify(data)
    }
    return this._HttpcallService_.api(postData);
  }

  update(data, id) {
    var postData = {
      service_NAME: "LOCATION",
      request_TYPE: "PUT",
      request_URI: "location/" + id,
      request_BODY: JSON.stringify(data)

    }
    return this._HttpcallService_.api(postData);
  }

  delete(id) {
    var postData = {
      service_NAME: "LOCATION",
      request_TYPE: "DELETE",
      request_URI: "location/" + id,
      request_BODY: ""
    }
    return this._HttpcallService_.api(postData);
  }

  search(data) {
    var postData = {
      service_NAME: "LOCATION",
      request_TYPE: "POST",
      request_URI: "location/search",
      request_BODY: JSON.stringify(data)

    }
    return this._HttpcallService_.api(postData);
  }

  searchAll(data) {
    var postData = {
      service_NAME: "LOCATION",
      request_TYPE: "POST",
      request_URI: "location/search/all",
      request_BODY: JSON.stringify(data)
    }
    return this._HttpcallService_.api(postData);
  }

  advancedSearch(data) {
    var postData = {
      service_NAME: "LOCATION",
      request_TYPE: "POST",
      request_URI: "location/advancedsearch",
      request_BODY: JSON.stringify(data)
    }
    return this._HttpcallService_.api(postData);
  }

  advancedSearchAll(data) {
    var postData = {
      service_NAME: "LOCATION",
      request_TYPE: "POST",
      request_URI: "location/advancedsearch/all",
      request_BODY: JSON.stringify(data)
    }
    return this._HttpcallService_.api(postData);
  }

  getAllDetail(response) {
    for (var a = 0; a < response.length; a++) {
      response[a].locationleveltype = response[a].locationleveltype_ID.code + " - " + response[a].locationleveltype_ID.description;
    }
    return(response);
  }

  getDetail(response) {
    response.locationleveltype = response.locationleveltype_ID.code + " - " + response.locationleveltype_ID.description;
    if (response.isactive == "Y") {
      response.isactive = true;
    } else {
      response.isactive = false;
    }
    return(response);
  }

}
