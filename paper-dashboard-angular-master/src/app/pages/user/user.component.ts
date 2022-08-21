import { Component, OnInit } from '@angular/core';
import { AdmUser } from 'app/models/AdmUser';
import { AuthenticationService } from 'app/services/authentication.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import { UserService } from 'app/services/user.service';
import { UserprofileService } from 'app/services/userprofile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    constructor(private router: Router,private userService: UserService, private uspService : UserprofileService,private loginservice: AuthenticationService, private tokenService:TokenStorageService) { }
    user;
    role;
    roles;
    ngOnInit(){
        if(this.user=this.tokenService.getUser()["user"]==null){
            this.user=this.tokenService.getUser();
        }
        else{
            this.user=this.tokenService.getUser()["user"];
        }
        this.role=this.tokenService.getRole();
        this.roles=this.userService.getProfilesU(this.user.use_id).subscribe(
            data=>{
                this.roles=data;
            }
        )
    }
}
