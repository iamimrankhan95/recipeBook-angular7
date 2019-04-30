import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authService:AuthService){

    }
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
        return this.authService.isUserAuthentic();
    }

}