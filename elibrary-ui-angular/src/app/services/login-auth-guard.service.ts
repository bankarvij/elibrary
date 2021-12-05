import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginAuthGuardService implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        const userId = localStorage.getItem('userName');
        const role = localStorage.getItem('role');
        if (!userId) {
            this.router.navigate(['']);
            return false;
        }

        if (route.routeConfig.path.includes('admin') && role !== 'admin') {
            this.router.navigate(['']);
            return false;
        }

        return true;
    }
    
}