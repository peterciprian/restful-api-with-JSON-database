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
  table: string = 'book';
  actualBook: object = {
    tite: '',
    author: '',
    genre: '',
    published: '',
    publisher: '',
    ISBN: ''
  }

  constructor(public http: HttpClient, private CRUDservice: CrudService) {
    this.CRUDservice.getAll('book');
    setTimeout(() => {
      this.books = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 100);
  }

  ngOnInit() {
  }

  create() {
    this.CRUDservice.create(this.table, this.newBook);
    this.CRUDservice.getAll(this.table);
    setTimeout(() => {
      this.books = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 200);
  }

  update(bookid) {
    this.CRUDservice.update(this.table, bookid, this.actualBook);
  }

  delete(bookid) {
    this.CRUDservice.delete(this.table, bookid);
    this.CRUDservice.getAll(this.table);
    setTimeout(() => {
      this.books = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 200);
  }

  edit(book) {
    this.actualBook = book;
  }

}
