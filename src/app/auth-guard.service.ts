import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate() {
    console.log('AuthGuard#canActivate called');
    const isAuthenticated = this.auth.isAuthenticated.getValue();
    if (isAuthenticated) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
