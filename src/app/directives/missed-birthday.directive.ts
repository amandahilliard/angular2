import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '.birthday'
})
export class MissedBirthdayDirective implements OnChanges{
  @Input() userBirthday: string
  myBirthday = new Date("04/25/1985");

  constructor() { }

  @HostBinding("class.missed") private missed = false;
  @HostBinding("class.is-older") private isOlder = false;


  ngOnChanges(){
    const userDateObj = new Date(this.userBirthday);
    const now = new Date();
    if(userDateObj < this.myBirthday){
      this.isOlder = true;
    }
  
    else if (userDateObj.getMonth() === now.getMonth() && userDateObj.getDate() < now.getDate()){
      this.missed = true;
    }
    else{
      this.missed = false;
    }

  }

}
