import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(private http: HttpClient) { }
  getLoginToken(email,password){
    console.log(this.http.post('http://localhost:8000/login',{email:email,password:password}));
    return this.http.post('http://localhost:8000/login',{email:email,password:password});
  }
}
