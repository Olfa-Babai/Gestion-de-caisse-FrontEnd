import { Component, OnInit } from '@angular/core';
import { AdmUser } from 'app/models/AdmUser';
import { AuthenticationService } from 'app/services/authentication.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import { UserService } from 'app/services/user.service';
import { UserprofileService } from 'app/services/userprofile.service';
import { Router } from '@angular/router';

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent implements OnInit{
    constructor(private router: Router,private userService: UserService, private uspService : UserprofileService,private loginservice: AuthenticationService, private tokenService:TokenStorageService) { }
    user;
    role;
    role_shown;
    ngOnInit(): void {
        if(this.user=this.tokenService.getUser()["user"]==null){
            this.user=this.tokenService.getUser();
        }
        else{
            this.user=this.tokenService.getUser()["user"];
        }
        this.role=this.tokenService.getRole();
        console.log("le role fl home : "+this.tokenService.getRole().name)
        this.role_shown=this.role.name.substring(5).toLocaleLowerCase();
    }

}
