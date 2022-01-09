import { Injectable } from '@angular/core';
import {
    CanLoad, Route, CanActivate,
    CanActivateChild, ActivatedRouteSnapshot,
    RouterStateSnapshot, UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
    constructor(private authService: AuthService) { }
    canLoad(route: Route) {
        return this.authService.checkPermission();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.isLoggedIn();
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return false;
    }
}