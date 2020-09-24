import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  login(username: string, password: string): void{
    localStorage.setItem("username", username);
    this.router.navigate([`/user/${username}`])

  }
  logout(): void{
    localStorage.removeItem("username");
    this.router.navigate([`/login`])
  }

  currentUser(): string{
    return localStorage.getItem("username")
  }

}
