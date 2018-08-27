import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorEmail: string = '';
  userEmail: string = '';

  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit() {

  }

  onSubmit(loginForm) {
   if (loginForm.valid) {
    this.authService.login(this.userEmail)
      .subscribe(
        (result) =>  this.router.navigate(['/gallery']),
        (error) => this.errorEmail = error,
        () => console.log('fin')
      );
    }
  }
}
