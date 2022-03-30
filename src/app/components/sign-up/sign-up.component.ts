import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{
  step:boolean = false;

    expertForm ={
      "professionsIds": [
       1,0
      ],
      "professionalAspectsIds": [
        0
      ],
      "description": "",
      "hourlyRate": 70,
      "email": "",
      "password": "",
      "confirmPassword": "",
      "firstName": "",
      "lastName": "",
      "photoId": 0
    }

  profession$ = this._apiServ.getProfession();

  constructor(private _apiServ:ApiService, private _authServ:AuthService ) { }

   sub(){
    this._authServ.signExpert(this.expertForm)
    
   }
 
nextStep(){
this.step = true
}
}
