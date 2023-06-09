import { HttpcallService } from "./httpcall.service";
export declare class LookupService {
    private _HttpcallService_;
    constructor(_HttpcallService_: HttpcallService);
    get(): import("rxjs").Observable<any>;
    getAll(): import("rxjs").Observable<any>;
    getOne(id: any): import("rxjs").Observable<any>;
    add(data: any): import("rxjs").Observable<any>;
    update(data: any, id: any): import("rxjs").Observable<any>;
    delete(id: any): import("rxjs").Observable<any>;
    search(data: any): import("rxjs").Observable<any>;
    searchAll(data: any): import("rxjs").Observable<any>;
    advancedSearch(data: any): import("rxjs").Observable<any>;
    advancedSearchAll(data: any): import("rxjs").Observable<any>;
    lookup(data: any): import("rxjs").Observable<any>;
    lookupAll(data: any): import("rxjs").Observable<any>;
    entityList(): import("rxjs").Observable<any>;
}
