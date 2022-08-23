import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthenticationService } from 'app/services/authentication.service';
import { UserService } from 'app/services/user.service';
import { AdmUser } from 'app/models/AdmUser';
import { TokenStorageService } from 'app/services/token-storage.service';
import { ToastrService } from 'ngx-toastr';


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
  au;
  ap;
  u;
   username:String;
   password:String;
   selectedRole="Choisissez votre profile...";
  testU: boolean=true;
  tokens;
  constructor(private toastr: ToastrService, private router: Router,
    private loginservice: AuthenticationService, private userService: UserService, private tokenService:TokenStorageService) {
  }
  ngOnInit(): void {
      this.theuserlogin();
      this.theuserregister();
      this.ap="";
      this.au="";
      this.selectedRole="Choisissez votre profile...";
      
  }
  //show hide div variables
  userlogin = true;
  userregister = false;
  invalidLogin = false;
  errorMessage;
  responsedata;
  checking;
  user;
  
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

  // login jdid : 
  
  login() {
    if( this.au!="" && this.ap !="")
    {
    this.loginservice.logIn(this.au,this.ap).subscribe(
      data=>{
        this.tokens=data["access_token"];
        this.tokenService.saveToken(this.tokens);
        console.log(this.tokens);
        console.log(this.tokenService.getToken());
    })
    }
    else{
      this.toastr.error(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Erreur de <b> connexion </b> Veuillez remplir le formulaire avec des infos correctes </span>',
          "",
          {
            timeOut: 4000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-top-center"
          }
        );
        this.au="";
        this.ap="";
    }
    // check that the users role is existant : or else tjih notif hehe
    if(this.tokenService.getToken()!=null){
      this.user=this.userService.getByUsername(this.au).subscribe(
        data=>{
          this.user=data;
          this.tokenService.saveUser(data);
          console.log("the token : "+this.tokenService.getToken())
          console.log("the user : "+this.tokenService.getUser())
        }
      );

      // role
      this.userService.getRole(this.tokenService.getUser().username).subscribe(
        data=>{
          //this.selectedRole=String(data);
          //console.log(this.selectedRole);
          this.tokenService.saveRole(data);
          console.log("selected role : "+this.tokenService.getRole());
        }
      );

      // redirectionll home
        this.router.navigate(['/home'])
    }
   
  }
  
}
