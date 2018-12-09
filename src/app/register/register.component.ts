import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  fullName: string;
  username: string;
  errorMessage: string;
  constructor(private authorization: AuthorizationService,private router: Router) { }

  registerEvent(){
    this.authorization.registerUser(this.email,this.password,this.fullName,this.username).subscribe(
      (authorization:any) => {
        if (authorization.status == "failed"){
          this.errorMessage = authorization.message;
        }
        else{
          this.router.navigateByUrl('');
        }
      }
    )
  }
  ngOnInit() {
  }

}
