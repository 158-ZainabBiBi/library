import { Http } from '@angular/http';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
export declare class LoginService {
    private http;
    private _router;
    private _toastr;
    constructor(http: Http, _router: Router, _toastr: ToastrService);
    authToken: any;
    user: any;
    userId: any;
    saveToken(token: any): boolean;
    saveDetail(user: any): boolean;
    loadToken(): void;
    loaddetail(): any;
    logout(): boolean;
    logged(): boolean;
}
//# sourceMappingURL=login.service.d.ts.map