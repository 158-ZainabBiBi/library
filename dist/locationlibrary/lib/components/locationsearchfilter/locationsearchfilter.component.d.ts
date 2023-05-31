import { OnInit, EventEmitter, QueryList } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OnFailService } from 'projects/locationlibrary/src/lib/services/on-fail.service';
import { LocationleveltypeService } from '../locationleveltype/locationleveltype.service';
import { LocationComponent } from '../location/location.component';
export declare class LocationsearchfilterComponent implements OnInit {
    private locationleveltypeservice;
    private toastrservice;
    private onfailservice;
    locations: QueryList<LocationComponent>;
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
    constructor(locationleveltypeservice: LocationleveltypeService, toastrservice: ToastrService, onfailservice: OnFailService);
    ngOnInit(): void;
    searchfilter(): void;
    searchfilterID(): any;
    reset(): void;
    setLocation(locations: any): void;
    selectedLocation(location: any): void;
    locationleveltypeGet(): void;
}
//# sourceMappingURL=locationsearchfilter.component.d.ts.map