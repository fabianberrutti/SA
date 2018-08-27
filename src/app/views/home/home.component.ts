import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './../../services/auth/auth.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  error = null;

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.bindEvents();
  }
  bindEvents() {
    this.route.params
      .subscribe((params) => this.error = params.error);
  }
  isLoggedIn() {
    return this.authService.isLoggedIn()
  }
}
