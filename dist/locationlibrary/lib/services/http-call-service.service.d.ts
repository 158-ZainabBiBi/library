import { Http } from "@angular/http";
import { LoginService } from "./login.service";
export declare class HttpCallServieService {
    private http;
    private loginService;
    constructor(http: Http, loginService: LoginService);
    BaseUrl: any;
    AuthUrl: any;
    api(postData: any): import("rxjs").Observable<any>;
}
//# sourceMappingURL=http-call-service.service.d.ts.map