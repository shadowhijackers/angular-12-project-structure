import {Injectable} from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {of} from "rxjs";
import {concatMap, map} from "rxjs/operators";
import {AuthService} from "../services";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin(state);
  }

  canLoad(route: Route)  {
    return this.checkLogin();
  }

  checkLogin(state?: RouterStateSnapshot) {
    return this.auth.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) => {
        if (!loggedIn) {
          this.router.navigateByUrl('/');
          return of(false);
        }else {
          return  of(true);
        }}),
    );
  }
}
