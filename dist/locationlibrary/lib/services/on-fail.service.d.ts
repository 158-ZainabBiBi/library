import { ToastrService } from "ngx-toastr";
import { LoginService } from '../pages/login/login.service';
export declare class OnFailService {
    private _toaster;
    private _loginService;
    constructor(_toaster: ToastrService, _loginService: LoginService);
    onFail(ifFail: any): void;
}
//# sourceMappingURL=on-fail.service.d.ts.map