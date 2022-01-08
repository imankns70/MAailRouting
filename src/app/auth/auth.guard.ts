import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService) { }
    canLoad(route: Route) {
        return this.authService.checkPermission();
    }
}