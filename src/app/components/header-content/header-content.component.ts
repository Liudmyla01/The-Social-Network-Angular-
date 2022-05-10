import { Component, ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss']
})
export class HeaderContentComponent implements OnInit{
  type: 'signUp' | 'logIn' = 'logIn';
  title:string ='';
  modal = false;
  userAutorize = false;
  user$ = this._authServ.getMe()
  
  constructor(private resolver:ComponentFactoryResolver, private _authServ:AuthService,private router: Router) {
    
  }
  
  ngOnInit() {
    
   let jwt = this._authServ.getJWT();
      if(!jwt){
        this.login();
      }else{
         this.userAutorize = true
         console.log(this.userAutorize);
         
       
      } 
  }
login(){
  this.modal = true;
  this.type = 'logIn';
  this.title = 'Log in'
}
signUp(){
  this.modal = true;
  this.type = 'signUp';
  this.title = 'Sign up';
}
  logOut(){
    this.userAutorize = false;
    localStorage.removeItem('token');
    this.router.navigate(['/popular']);
    console.log(this.userAutorize);
  }
}
