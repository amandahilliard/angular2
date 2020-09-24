import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login/login.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'todos', component: TodoComponent, canActivate: [UserGuard]},
  {path: 'user/:username', component: UserComponent, canActivate: [UserGuard]},
  {path: '**', redirectTo: '/todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}