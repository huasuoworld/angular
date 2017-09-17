import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    aRouter: ActivatedRoute;
    constructor(private router: Router, aRouter: ActivatedRoute) {
      this.aRouter = aRouter;
    }

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
