import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { CrudService } from '../crud.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  newAuthor: object = {
    name: '',
    born: '',
    alive: '',
    books: ''
  }
  authors: any;

  constructor(public http: HttpClient, private CRUDservice: CrudService) {
    this.CRUDservice.getAll('author');
    setTimeout(() => {
      this.authors = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 100);
  }

  ngOnInit() {
  }

}
