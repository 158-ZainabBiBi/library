import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocationleveltypeService } from './locationleveltype.service';
import { OnfailService } from '../../services/onfail.service';
export declare class LocationleveltypeComponent implements OnInit {
    private locationleveltypeservice;
    private toastrservice;
    private onfailservice;
    iscompulsory: boolean;
    disabled: boolean;
    all: boolean;
    locationleveltypeID: any;
    locationleveltypes: any[];
    constructor(locationleveltypeservice: LocationleveltypeService, toastrservice: ToastrService, onfailservice: OnfailService);
    ngOnInit(): void;
    setLocationType(response: any): void;
    locationleveltypeGet(): void;
}
