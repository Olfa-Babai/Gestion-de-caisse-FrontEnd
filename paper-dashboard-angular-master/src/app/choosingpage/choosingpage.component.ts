import { Component, OnInit } from '@angular/core';
import { AdmUser } from 'app/models/AdmUser';
import { AuthenticationService } from 'app/services/authentication.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import { UserService } from 'app/services/user.service';
import { UserprofileService } from 'app/services/userprofile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choosingpage',
  templateUrl: './choosingpage.component.html',
  styleUrls: ['./choosingpage.component.css']
})

export class ChoosingpageComponent implements OnInit {

  constructor(private router: Router,private userService: UserService, private uspService : UserprofileService,private loginservice: AuthenticationService, private tokenService:TokenStorageService) { }

  user;
  profiles;

  ngOnInit(): void {
    
    console.log(this.tokenService.getUser())
    if(this.user=this.tokenService.getUser()["user"]==null){
        this.user=this.tokenService.getUser();
    }
    else{
        this.user=this.tokenService.getUser()["user"];
    }
    this.profiles=this.userService.getProfilesU(this.user.use_id).subscribe(
      data=>{
        console.log(data)
        this.profiles=data
      }
    );
   /* console.log('getting it : '+window.localStorage.getItem('matricule'))
    this.user=this.userService.search(window.localStorage.getItem('matricule')).subscribe(
      data=>{
        this.user=data;
        this.profiles=this.uspService.getByProfiles(this.user.use_id).subscribe(
          data=>{
            this.profiles=data;
            console.log("the profiles",this.profiles);
          }
        )
        console.log("user logged",this.user)
      }
    );*/

  }
  refresh(){
      location.reload()
  }
  logout(){
    this.tokenService.signOut();
    this.router.navigate(['/login'])
  }
  choosing(p:any){
    this.tokenService.saveRole(p);
    this.router.navigate(['/home'])
  }
}
