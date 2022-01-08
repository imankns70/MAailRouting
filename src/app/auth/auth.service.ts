import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = { isAdmin: true };

  checkPermission() {
    return of(this.user.isAdmin)
  } 
  isLoggedIn() {
    return of(true);
  }

}
