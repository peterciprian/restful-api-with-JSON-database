import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import { UsersComponent } from './users/users.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { GenereComponent } from './genere/genere.component';
import { RentsComponent } from './rents/rents.component';

const routes: Routes = [
  { component: UsersComponent, path: '', pathMatch: 'full' },
  { component: UsersComponent, path: 'users' },
  { component: AuthorsComponent, path: 'authors' },
  { component: BooksComponent, path: 'books' },
  { component: GenereComponent, path: 'genere' },
  { component: RentsComponent, path: 'rents' }
];

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    UsersComponent,
    AuthorsComponent,
    BooksComponent,
    GenereComponent,
    RentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
