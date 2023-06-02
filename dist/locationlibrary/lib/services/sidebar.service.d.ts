import { Http } from '@angular/http';
import { LoginService } from './login.service';
export declare class SidebarService {
    private http;
    private loginService;
    constructor(http: Http, loginService: LoginService);
    LoggedUserId: any;
    BaseUrl: any;
    userprivileges(): import("rxjs").Observable<any>;
}
