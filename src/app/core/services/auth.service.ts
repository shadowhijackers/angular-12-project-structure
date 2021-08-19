import {Injectable} from "@angular/core";
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor() {

    // for demo as logged in
    this.isAuthenticated$.next(true);
  }

  authenticate(isAuthenticated: boolean): void{
    this.isAuthenticated$.next(isAuthenticated);
  }


}
