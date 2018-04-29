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
  table: string = 'user';
  actualUser: object = {
    name: '',
    email: '',
    job: '',
    address: ''
  }
  show: number;

  constructor(public http: HttpClient, private CRUDservice: CrudService) {
    this.CRUDservice.getAll(this.table);
    setTimeout(() => {
      this.users = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 100);
  }

  ngOnInit() {
  }

  create() {
    this.CRUDservice.create(this.table, this.newUser);
    this.CRUDservice.getAll(this.table);
    setTimeout(() => {
      this.users = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 200);
  }

  update(userid) {
    this.CRUDservice.update(this.table, userid, this.actualUser);
  }

  delete(userid) {
    this.CRUDservice.delete(this.table, userid);
    this.CRUDservice.getAll(this.table);
    setTimeout(() => {
      this.users = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 200);
  }

  edit(user) {
    this.actualUser = user;
  }

}
