import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthenticationService } from 'app/services/authentication.service';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
  /**
   *
   */
  au:String;
  ap:String;
   username:String;
   password:String;
  constructor(private router: Router,
    private loginservice: AuthenticationService) {
  }
  ngOnInit(): void {
      this.theuserlogin();
      this.theuserregister();
  }
  //show hide div variables
  userlogin = true;
  userregister = false;
  
  invalidLogin = false
  //Buttons clicks functionalities 
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
  }

  theuserlogin(){
    return this.user_login;
  }

  theuserregister(){
    return this.user_register;
  }

  // login :
  checkLogin() {
    if (this.loginservice.authenticate(this.au, this.ap))
    {
      this.router.navigate(['/dashboard'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
      console.log(this.invalidLogin)
  }


}
