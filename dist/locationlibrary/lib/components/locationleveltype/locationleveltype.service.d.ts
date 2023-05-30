import { HttpCallServieService } from "projects/locationlibrary/src/lib/services/http-call-servie.service";
export declare class LocationleveltypeService {
    private _HttpCallServieService_;
    constructor(_HttpCallServieService_: HttpCallServieService);
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
    entityList(): import("rxjs").Observable<any>;
}
//# sourceMappingURL=locationleveltype.service.d.ts.map