import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  newUser: object = {
    name: '',
    email: '',
    job: '',
    address: ''
  }

  user: object = {
    name: '',
    email: '',
    job: '',
    address: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
