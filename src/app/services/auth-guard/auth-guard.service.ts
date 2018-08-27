import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    if(this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(
      ['/home' , { error: 'La sección requiere autorización' }], 
      { skipLocationChange: true}
      );
    return false;
  }

}