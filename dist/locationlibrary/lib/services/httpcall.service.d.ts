import { Http } from "@angular/http";
import { LoginService } from "./login.service";
export declare class HttpcallService {
    private http;
    private loginService;
    constructor(http: Http, loginService: LoginService);
    authToken: any;
    user: any;
    userId: any;
    loaddetail(): any;
    BaseUrl: any;
    AuthUrl: any;
    api(postData: any): import("rxjs").Observable<any>;
}
