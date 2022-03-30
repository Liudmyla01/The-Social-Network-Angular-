import { Component, ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss']
})
export class HeaderContentComponent implements OnInit{
  type: 'signUp' | 'logIn' = 'logIn'
  modal = false;
  userAutorize = false;
  user$ = this._authServ.getMe()
  
  constructor(private resolver:ComponentFactoryResolver, private _authServ:AuthService) {
    
  }
  
  ngOnInit() {
    
   let jwt = this._authServ.getJWT();
      if(!jwt){
        this.modal = true;
      }else{
         this.userAutorize = true
       
      } 
  }
}
