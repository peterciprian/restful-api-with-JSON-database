import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { CrudService } from '../crud.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  newBook: object = {
    tite: '',
    author: '',
    genre: '',
    published: '',
    publisher: '',
    ISBN: ''
  }
  books: any;

  constructor(public http: HttpClient, private CRUDservice: CrudService) {
    this.CRUDservice.getAll('book');
    setTimeout(() => {
      this.books = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 100);
  }

  ngOnInit() {
  }

}
