import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { map, take, tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class ApiService implements OnInit{
    readonly apiUrl = 'http://3asoftmasterminds.somee.com/';
    favoUser = {
      id: '101',
      firstName: 'Jerry',
      description: 'Frontend engineer',
      avatar: 'http://hypeava.ru/uploads/posts/2019-07/1563004739_2.jpg',
      popular: false
    }

    constructor(private _httpClient: HttpClient){
    }
    
    ngOnInit() {
    }

    getMentorWithId(id:any){
      return this._httpClient.get(`${this.apiUrl}api/mentor/${id}:int`).pipe(
        map((res:any) => {return res.data}))
      
    }

    getGuestUsers(){
      return this._httpClient.get(`${this.apiUrl}`).pipe(
        map((res:any)=>{
          return res.data
        })
      )  
    }

    getFavotitesUsers(){
      return this._httpClient.get(`${this.apiUrl}api/favorite/favorite-list`).pipe(
        map((res:any) => { 
          if(res.data.length == 0){
            return [this.favoUser]
          }else{
            return res.data
          }
        
        })
      )
    }
    addRemoveUserFavarotes(id:any){
      return this._httpClient.put(`${this.apiUrl}api/favorite/add-remove-favorite/${id}`,'')
    }
    getProfession(){
      return this._httpClient.get(`${this.apiUrl}api/profession`).pipe(
        map((res:any) => {return res.data})
      )
    }
}
