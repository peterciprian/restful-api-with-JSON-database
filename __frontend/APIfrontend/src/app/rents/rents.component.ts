import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { CrudService } from '../crud.service';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {

  newRent: object = {
    book: '',
    user: '',
    rented: '',
    returned: ''
  }
  rents: any;
  table: string = 'rent';
  actualRent: object = {
    book: '',
    user: '',
    rented: '',
    returned: ''
  }
  constructor(public http: HttpClient, private CRUDservice: CrudService) {
    this.CRUDservice.getAll('rent');
    setTimeout(() => {
      this.rents = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 100);
  }

  ngOnInit() {
  }

  create() {
    this.CRUDservice.create(this.table, this.newRent);
    this.CRUDservice.getAll(this.table);
    setTimeout(() => {
      this.rents = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 200);
  }

  update(rentid) {
    this.CRUDservice.update(this.table, rentid, this.actualRent);
  }

  delete(rentid) {
    this.CRUDservice.delete(this.table, rentid);
    this.CRUDservice.getAll(this.table);
    setTimeout(() => {
      this.rents = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 200);
  }
}
