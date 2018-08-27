import { Component, HostListener } from '@angular/core';
import {NgForm} from '@angular/forms'
import { AuthService } from './services/auth/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn()
  }
  logout() {
    this.authService.logout()
    this.router.navigate(['/home']);
    localStorage.clear();

  }


}
