import { OnInit, EventEmitter, QueryList } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocationleveltypeService } from '../locationleveltype/locationleveltype.service';
import { LocationComponent } from '../location/location.component';
import { OnfailService } from '../../services/onfail.service';
export declare class LocationsearchfilterComponent implements OnInit {
    private locationleveltypeservice;
    private toastrservice;
    private onfailservice;
    locations: QueryList<LocationComponent>;
    baseURL: String;
    view: number;
    disabled: boolean;
    issearchfilter: boolean;
    isshowlables: boolean;
    locationtypeID: number;
    locationID: number;
    locationsearchfilterID: number;
    advancedSearch: EventEmitter<any>;
    locationleveltypes: any[];
    search: {
        locationparent_ID: any;
    };
    constructor(locationleveltypeservice: LocationleveltypeService, toastrservice: ToastrService, onfailservice: OnfailService);
    ngOnInit(): void;
    searchfilter(): void;
    searchfilterID(): any;
    reset(): void;
    setLocation(locations: any): void;
    selectedLocation(location: any): void;
    locationleveltypeGet(): void;
}
