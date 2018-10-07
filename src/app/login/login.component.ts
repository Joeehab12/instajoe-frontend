import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  token: string;
  constructor(private authorization: AuthorizationService, private cookie: CookieService,private router: Router) { }

  myEvent() {
    this.authorization.getLoginToken(this.email, this.password).subscribe(
      (authorization) => {
        this.token = authorization.token;
        this.cookie.set("token", this.token);
        this.router.navigateByUrl('feed');
      }
    );
  }
  ngOnInit() {


  }
}