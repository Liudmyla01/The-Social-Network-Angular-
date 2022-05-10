import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UsersCardComponent implements OnInit{
@Input() user:any = {
  id:'',
  firstName:'',
  lastName:'',
  avatar:'',
  rating:'',
  profession:'',
  hourlyRate:'',
  description:''
}
@Input() type: 'small'| 'medium' | 'large' = 'small';
@Input() classType:boolean = true;
follow:boolean = false;

constructor(readonly _apiServ:ApiService){
}
ngOnInit(): void { 
 }
 addRemoveUserFavarotes(id:any){
   this.follow = !this.follow
   return this._apiServ.addRemoveUserFavarotes(id).pipe(
     take(1)
   ).subscribe()
 }

 }
