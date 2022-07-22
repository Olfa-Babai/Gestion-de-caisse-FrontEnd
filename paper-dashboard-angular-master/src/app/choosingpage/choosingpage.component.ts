import { Component, OnInit } from '@angular/core';
import { AdmUser } from 'app/models/AdmUser';
import { AuthenticationService } from 'app/services/authentication.service';
import { UserService } from 'app/services/user.service';
import { UserprofileService } from 'app/services/userprofile.service';

@Component({
  selector: 'app-choosingpage',
  templateUrl: './choosingpage.component.html',
  styleUrls: ['./choosingpage.component.css']
})
export class ChoosingpageComponent implements OnInit {

  constructor(private userService: UserService, private uspService : UserprofileService,private loginservice: AuthenticationService) { }

  user;
  profiles;

  ngOnInit(): void {
    console.log('getting it : '+window.localStorage.getItem('matricule'))
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
    );
  }

}
