import { RequestOptions, BaseRequestOptions, RequestOptionsArgs } from '@angular/http';
export declare class RequestOptionsService extends BaseRequestOptions {
    constructor();
    merge(options?: RequestOptionsArgs): RequestOptions;
}
