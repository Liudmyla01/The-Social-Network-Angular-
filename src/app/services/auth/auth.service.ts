import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  
  readonly baseUrl = 'http://3asoftmasterminds.somee.com/';
  tokenFild = 'token'
  tokenExpiration:any
  helper = new JwtHelperService();

  constructor(public _httpClient: HttpClient, public router:Router) { 
  }
  
logOut(){
  const tokenAutorize =  this.getJWT()?.toString();
  const isExpired = this.helper.isTokenExpired(tokenAutorize)
  
  
  if(!isExpired){
    return this._httpClient.get(`${this.baseUrl}by-email`).pipe(
      map((res:any)=> res.data))
  }else{
    localStorage.removeItem(this.tokenFild);
    return 
  }

}
  getMe(){
    return this._httpClient.get(`${this.baseUrl}by-email`).pipe(
      map((res:any)=> res.data))
  }

  saveJWT(token:any){ localStorage.setItem(this.tokenFild, token) }
  getJWT(){ return localStorage.getItem(this.tokenFild) }

  singUp(body:any){
    this._httpClient.post(`${this.baseUrl}api/account/create-user`, body)
    .pipe(take(1))
    .subscribe((res:any) => { this.tokenAutorization(res) })
  }
  signExpert(body:any){
    this._httpClient.post(`${this.baseUrl}api/account/create-mentor`, body)
    .pipe(take(1))
    .subscribe((res:any) => { this.tokenAutorization(res) 
       this.router.navigateByUrl('profile')
    })
  }

  logIn(body:any){
    this._httpClient.post(`${this.baseUrl}api/account/login`,body)
    .pipe(take(1))
    .subscribe((res:any) => {return this.tokenAutorization(res) })
    
  }
  
  tokenAutorization(res:any){
    const token = res.data['jwt-token'];
      this.saveJWT(token);
      window.location.href = 'http://localhost:4200/profile'
  }
}
