import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
import { UserService } from 'app/services/user.service';
import { GendebtService } from 'app/services/gendebt.service'
import { TokenStorageService } from 'app/services/token-storage.service';
import { ToastrService } from 'ngx-toastr';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {
    constructor(private toastr: ToastrService, private router: Router,
        private loginservice: AuthenticationService, private debtService: GendebtService, private userService: UserService, private tokenService:TokenStorageService) {
      }
    liste=false;
    ajout=false;
    currentDate:Date;
    currentDebt;
    word;

    client;
    cpte;
    cptes;
    caisse;
    caisses;
    encaissement;
    typeOp;
    org;
    orgs;
    mode;
    modes;
    commentaire;
    debt;
    
    methode;
    montant;
    solde;
    lastSession;

    ngOnInit() {
        this.currentDate=new Date();
        this.montant=0;
        this.getCaisses();
        this.getOrgs();
        this.thelastSession()
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
                console.log(this.caisse);
            }
        )
    }

    getOrgs(){
        this.orgs=this.debtService.getOrgs().subscribe(
            data=>{
                this.orgs=data;
                console.log(this.orgs);
            }
        )
    }
  
    getComptesClient(id){
        return this.debtService.getClientAccounts()
    }

    readDetails(){
        this.montant=this.debt.deb_amountinit;
        this.client=this.debt.party;
        this.cptes=this.client.genaccounts;
    }

    dothis(event){
        console.log("amount "+event.target.value)
        this.cpte=event.target.value;
        this.solde=event.target.value.aco_amount;
    }

    search(){
        console.log(this.word)
        this.debt=this.debtService.searchFact(this.word).subscribe(
            data=>{
                console.log(data)
                this.debt=data;
                this.tokenService.saveDebt(data);
                console.log(this.tokenService.getDebt());
            }
        )
    }

}
