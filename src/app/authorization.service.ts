import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(private http: HttpClient) { }
  getLoginToken(email, password) {
    return this.http.post('http://localhost:8000/login', { email: email, password: password });
  }
  registerUser(email, password, fullName, username) {
    return this.http.post('http://localhost:8000/register', { email: email, password: password, fullName: fullName, username: username });
  }

}
