import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class CrudService {

  data: any;
  constructor(public http: Http) { }

  getAll(table) {
    this.http.get('http://localhost:3000/api/' + table).subscribe(
      data => {
        this.data = data;
      });
  }

  getOne(table, id) {
    this.http.get('http://localhost:3000/api/' + table + '/' + id).subscribe(
      data => {
        this.data = data;
        console.log(this.data)
      });
  }

  create(table, newData) {
    this.http.post('http://localhost:3000/api' + table, newData).subscribe(
      data => {
        console.log(data);
        this.getAll(table);
      });
  }

  update(table, id, data) {
    this.http.put('http://localhost:3000/api/' + table + '/' + id, data).subscribe(
      data => {
        console.log(data);
      });
  }

  delete(table, id) {
    this.http.delete('http://localhost:3000/' + table + '/' + id).subscribe(
      data => {
        console.log(data);
        this.getAll(table);
      });
  }
}
