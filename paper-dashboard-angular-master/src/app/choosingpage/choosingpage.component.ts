import { Component, OnInit } from '@angular/core';
import { AdmUser } from 'app/models/AdmUser';
import { AuthenticationService } from 'app/services/authentication.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import { UserService } from 'app/services/user.service';
import { UserprofileService } from 'app/services/userprofile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GendebtService } from 'app/services/gendebt.service';

@Component({
  selector: 'app-choosingpage',
  templateUrl: './choosingpage.component.html',
  styleUrls: ['./choosingpage.component.css']
})

export class ChoosingpageComponent implements OnInit {

  constructor(private router: Router,private userService: UserService,private debtService: GendebtService, private uspService : UserprofileService,private loginservice: AuthenticationService, private tokenService:TokenStorageService) { }

  user;
  lastSession;
  sessions;
  agent;
  caisse;
  caisses;

  ngOnInit(): void {
    this.thelastSession()
    this.user=this.tokenService.getUser();
    console.log(this.user);
    this.getAgent();
    console.log(this.agent);
    this.getCaisses();
  }

  thelastSession(){
    this.lastSession=this.userService.checkSession().subscribe(
      data=>{
        this.lastSession=data;
        this.caisse=this.lastSession.paycashdesk
        console.log(this.lastSession)
      })
  }

  getCaisses(){
    this.caisses=this.debtService.getCaisses().subscribe(
      data=>{
        this.caisses=data;
        console.log(this.caisses)
      }
    )
  }

  openSession(){
    this.lastSession=this.userService.openSession(this.user.username,this.caisse.cah_id).subscribe(
      data=>{
        this.lastSession=data
        this.getAgent()
      }
    )
  }

  fermer(){
    this.userService.closeSession(this.lastSession.css_id).subscribe(
      data=>{
        console.log(data);
        this.lastSession=null
        location.reload()
      }
    )
  }

  selectCaisse(c){
    this.caisse=c;
  }

  getAgent(){
    this.agent=this.userService.getAgent(this.user.username).subscribe(
      data=>{
        this.agent=data;
        console.log(data);
        this.sessions=this.agent.paycashdesksession;
      }
    )
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
