import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  modal = false

  constructor(public authService: AuthService) { }
  loginName:any = 'alex@gmail.com';
  loginPassword:any = '123qwer';
  ngOnInit(): void {
  }

  submitSignIn(){
    console.log( 'cons from login comp', this.loginName,
      this.loginPassword);
      this.authService.logIn({email:this.loginName, password:this.loginPassword})
this.loginName ='';
this.loginPassword =''
  
   }
}
