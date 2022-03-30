import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  usersTest = [
    {
      id: '1',
      firstName: 'Jerry',
      description: 'Frontend engineer',
      avatar: 'http://hypeava.ru/uploads/posts/2019-07/1563004739_2.jpg',
      popular: false
    },
    {
      id: '2',
      firstName: 'Tom',
      description: 'Marketing consultant',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8K81o3INb7nfNEIkKT1dLmEX4hVepUQqjDn4evORjHNp6Y6xdzH-WtWQrk2k25eANz2E&usqp=CAU',
      popular: false
    }
  ]

getMentorWithId$ = this.apiService.getMentorWithId
guestUsers$ = this.apiService.getGuestUsers();

  // readonly limit = 8;
  // readonly activePage$ = new BehaviorSubject(0);

  // users$ = this.getUsers()

    constructor(private apiService: ApiService, private _activatedRout: ActivatedRoute) {
    }
    ngOnInit() {  }

  
}
