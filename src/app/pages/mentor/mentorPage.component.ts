import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/usersServiece.service';

@Component({
  selector: 'mentorPage',
  templateUrl: './mentorPage.component.html',
  styleUrls: ['./mentorPage.component.scss']
})
export class UserDescriptionComponent implements OnInit {

  // readonly user$ = this._usersService.guestUsers$.pipe(
  //   switchMap((users) => this._activatedRout.paramMap.pipe(
  //     map((paramMap) => 
    
  //       users.find((user:any) => user.id === paramMap.get('id'))
  // )
  //   ))
  // )

  ///////////НЕ РАБОТАЕТ//////////////
  // user$ = this._activatedRout.paramMap.pipe(
  //   map((paramMap:any) => 
  //   //  paramMap.get('id')
  //   console.log(  paramMap)
  //   ),
  //   switchMap((id) => this._usersService.getMentorWithId$(id).pipe(
  //     tap((res) =>console.log(res))
  //     )
  //   )
  // )
  
// uid:any
//  userId$ =  this._activatedRout.paramMap.pipe(
//    tap((r)=> console.log(r)),
//   map((paramMap) => paramMap.get('id')),
//   take(1)
// )
// .subscribe((res) => {this.uid = res});

//  user$ = this._usersService.getMentorWithId$(this.userId$)

user$:any

constructor(private _usersService: UsersService,private _activatedRout:ActivatedRoute,private apiSer:ApiService){
}
ngOnInit() {

 this.user$ = this._activatedRout.paramMap.pipe(
    map((paramMap:any) =>  paramMap.get('id')),
    switchMap((id) => this.apiSer.getMentorWithId(id))
    // tap((res) => console.log(res))
  )
}

}
