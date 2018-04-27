import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { CrudService } from '../crud.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  newGenre: object = {
    genreName: '',
    majorGenre: '',
    fiction: ''
  }
  genres: any;

  constructor(public http: HttpClient, private CRUDservice: CrudService) {
    this.CRUDservice.getAll('genre');
    setTimeout(() => {
      this.genres = this.CRUDservice.data;
      console.log(this.CRUDservice.data);
    }, 100);
  }

  ngOnInit() {
  }

}
