import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { CrudService } from '../crud.service';


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
  users: any;
  /*user: object = {
    name: '',
    email: '',
    job: '',
    address: ''
  }*/

  constructor(public http: HttpClient, private CRUDservice: CrudService) {
    this.CRUDservice.getAll('user');
    setTimeout(() => {
      this.users = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 100);
  }

  ngOnInit() {
  }

}
