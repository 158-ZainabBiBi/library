import { ToastrService } from "ngx-toastr";
import { LoginService } from './login.service';
export declare class OnfailService {
    private _toaster;
    private _loginService;
    constructor(_toaster: ToastrService, _loginService: LoginService);
    onFail(ifFail: any): void;
}
