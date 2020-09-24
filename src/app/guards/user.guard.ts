import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';



@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const username = this.userService.currentUser();

    if(username === null){
      this.router.navigate(['/login'])
      return false;
    }
    if(state.url === '/todos'){
      return true
    }
    if(route.params.username && username.toLowerCase() != route.params.username.toLowerCase()){
      this.router.navigate([`/user/${username}`]);
    }
    return true;

  }
  
}
