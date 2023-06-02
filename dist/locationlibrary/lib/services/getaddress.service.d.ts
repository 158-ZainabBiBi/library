import { HttpcallService } from './httpcall.service';
export declare class GetaddressService {
    private _HttpcallService_;
    constructor(_HttpcallService_: HttpcallService);
    getByPostcode(postcode: any): import("rxjs").Observable<any>;
}
