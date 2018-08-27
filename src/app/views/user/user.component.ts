import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  currentUser = {}
  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
  }

}
