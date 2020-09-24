import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login/login.component';
import { MouseFocusDirective } from './directives/mouse-focus.directive';
import { MissedBirthdayDirective } from './directives/missed-birthday.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent,
    FilterPipe,
    SortPipe,
    TodolistComponent,
    LoginComponent,
    MouseFocusDirective,
    MissedBirthdayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
