import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(private userService: UserService) { }

  login(){
    if(this.username.length > 0 && this.password.length > 0){
      this.userService.login(this.username, this.password)
    }
  }

  ngOnInit(): void {
  }

}
