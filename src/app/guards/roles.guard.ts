import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { AuthService } from "../service/AuthService";

@Injectable() 
export class RolesGuard {
    constructor(private router: Router, private auth : AuthService) { }

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
        if (this.auth.roles() != '["Administrator"]' && this.auth.roles() != '["Shipper"]') {/// todo "["fsdf"]" => "fsdf"
            this.router.navigateByUrl("/");
            return false;
        }
        return true;
    }
}