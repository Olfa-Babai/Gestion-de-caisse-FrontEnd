import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthenticationService } from 'app/services/authentication.service';
import { UserService } from 'app/services/user.service';
import { AdmUser } from 'app/models/AdmUser';


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
  u;
   username:String;
   password:String;
   selectedRole="Choisissez votre profile...";
  testU: boolean=true;
  constructor(private router: Router,
    private loginservice: AuthenticationService, private userService: UserService) {
  }
  ngOnInit(): void {
      this.theuserlogin();
      this.theuserregister();
      
  }
  //show hide div variables
  userlogin = true;
  userregister = false;
  invalidLogin = false;
  
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

  uexists(login:String,pwd:String):boolean{
    this.u=this.userService.uexists(login,pwd).subscribe(
      data=>{
        this.u=data;
        console.log("usegh louel ",this.u);
        this.loginservice.authenticate(this.u.use_matricule,true);
      }
    )
    if(this.u.use_id === 0 || this.u===null){
      this.u=null;
      this.testU=false;
      }
      console.log(" test u "+this.testU) 
    return this.testU;
  }

  // login :
  checkLogin() {
    
    if( this.uexists(this.au,this.ap) ){
      //window.location.reload()
      this.router.navigate(['/choosing'])
      this.invalidLogin = false
    } 
    else
      this.invalidLogin = true 
      console.log(this.invalidLogin)
  }  

}
