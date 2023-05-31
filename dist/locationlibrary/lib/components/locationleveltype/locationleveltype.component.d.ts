import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OnFailService } from 'projects/locationlibrary/src/lib/services/on-fail.service';
import { LocationleveltypeService } from './locationleveltype.service';
export declare class LocationleveltypeComponent implements OnInit {
    private locationleveltypeservice;
    private toastrservice;
    private onfailservice;
    iscompulsory: boolean;
    disabled: boolean;
    all: boolean;
    locationleveltypeID: any;
    locationleveltypes: any[];
    constructor(locationleveltypeservice: LocationleveltypeService, toastrservice: ToastrService, onfailservice: OnFailService);
    ngOnInit(): void;
    setLocationType(response: any): void;
    locationleveltypeGet(): void;
}
//# sourceMappingURL=locationleveltype.component.d.ts.map