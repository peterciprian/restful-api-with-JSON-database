import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import { UsersComponent } from './users/users.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { GenreComponent } from './genre/genre.component';
import { RentsComponent } from './rents/rents.component';
import { CrudService } from './crud.service';


const routes: Routes = [
  { component: UsersComponent, path: '', pathMatch: 'full' },
  { component: UsersComponent, path: 'users' },
  { component: AuthorsComponent, path: 'authors' },
  { component: BooksComponent, path: 'books' },
  { component: GenreComponent, path: 'genre' },
  { component: RentsComponent, path: 'rents' }
];

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    UsersComponent,
    AuthorsComponent,
    BooksComponent,
    GenreComponent,
    RentsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
