import { Http } from "@angular/http";
import { LoginService } from "../pages/login/login.service";
export declare class HttpCallServieService {
    private http;
    private loginService;
    constructor(http: Http, loginService: LoginService);
    BaseUrl: any;
    AuthUrl: any;
    api(postData: any): import("rxjs").Observable<any>;
}
//# sourceMappingURL=http-call-servie.service.d.ts.map