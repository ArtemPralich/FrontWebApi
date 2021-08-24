import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { AuthService } from "../service/AuthService";

@Injectable()
export class NoauthGuard {
    constructor(private router: Router, private auth : AuthService) { }

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
        alert(this.auth.authenticated())
        if (this.auth.authenticated()) {
            this.router.navigateByUrl("/");
            return false;
        }
        else
        alert(1);
        return true;
    }
}