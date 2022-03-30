import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/usersServiece.service';

@Component({
  selector: 'app-search-mentor',
  templateUrl: './search-mentor.component.html',
  styleUrls: ['./search-mentor.component.scss']
})
export class SearchMentorComponent implements OnInit {
  
  // readonly pages$ = this._UserServ.pagination$
  // users$ = this._UserServ.users$;
  // setActivatePage = this._UserServ.setActivePage;


  readonly limit = 8;
  readonly searchControl$ = new FormControl();
  readonly rateControl$ = new FormControl();
  readonly activePage$ = new BehaviorSubject(0);
  readonly usersData = this._apiServ.getGuestUsers();
  readonly users$ = this.getUsers()
  readonly pagination$ = this.usersData.pipe(
    map((users) => new Array(Math.ceil(users.length / this.limit))
      .fill(undefined)
      .map((_, index) => index + 1),

    ),
    tap((pages: any) => {
      this.resetActivePage(pages)
    })
    )

  constructor(private _UserServ:UsersService, private _apiServ:ApiService) { 

  }

  ngOnInit(): void {
  }
controler(control:any){
  return control.valueChanges.pipe(
    //  filter((term)=> term.length > 2),
     debounceTime(400),
     distinctUntilChanged(),
     startWith(''))
};
  getUsers() {
   const search$ =  this.searchControl$.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    startWith('')
   )
  
   ;
   const rate$ =  this.controler(this.rateControl$)
    
        return combineLatest([this.usersData, this.activePage$,search$]).pipe(
          // tap(console.log),
          map(([users, activePage, search]) => {
            const startPosition = (activePage - 1) * this.limit
            return users
            .filter(
              (user:any)=> !search || user.firstName.includes(search) || search.includes(user.firstName)
              )
             .slice(startPosition, startPosition + this.limit)
          })
        )
      }
    

  setActivePage(page: any) {
    // console.log(this.pages$);
    
   this.activePage$.next(page)
    
  }
  resetActivePage(pages: Array<number>) {
    const activePageValue = this.activePage$.getValue();
    if (activePageValue === 0 && pages[0]) {
      this.activePage$.next(1);
    } else if (pages[activePageValue - 1]) {
      this.activePage$.next(activePageValue);
    } else {
      this.activePage$.next(pages[0] ? 1 : 0);
    }
  }
  
  
}
