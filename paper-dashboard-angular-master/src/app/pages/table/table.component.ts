import { Component, OnInit } from '@angular/core';
import { AdmUser } from 'app/models/AdmUser';
import { AuthenticationService } from 'app/services/authentication.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import { UserService } from 'app/services/user.service';
import { UserprofileService } from 'app/services/userprofile.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleToUserForm } from 'app/models/RoleToUserForm';
import { AdmProfile } from 'app/models/AdmProfile';
import { Profile } from 'app/models/Profile';
import { data } from 'jquery';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    constructor(private toastr: ToastrService, private userprofileService:UserprofileService, private router: Router,private userService: UserService, private uspService : UserprofileService,private loginservice: AuthenticationService, private tokenService:TokenStorageService) { }
    public tableData1: TableData;
    public tableData2: TableData;
    public editprofile;
    public edituser;
    public searchUser;
    users;
    search;
    selectedRole:string;
    selectedU;
    updatedU;
    newU;
    newRole;
    newR:AdmProfile=new AdmProfile();
    newUser:AdmUser=new AdmUser();

    ngOnInit(){
        this.getAll()
        this.edituser=false;
        this.editprofile=false;
    }

    editUShow(un){
        this.updatedU=this.getUser(un);
        console.log("un"+un)
        console.log(this.selectedU)
        this.edituser=true;
    }
    editPShow(){
        this.editprofile=true;
    }

    deleting(un){
        this.getUser(un)
        console.log(this.selectedU)
        this.userService.deleteu(this.selectedU).subscribe(
            data=>{
                console.log(data)
                this.getAll();
            }
        )
    }

    editing(){
        // update
        this.userService.editu(this.selectedU.use_id,this.selectedU).subscribe(
            data=>{
                console.log(data);
                this.getAll();
            }
        )
        // notif 
        this.toastr.error(
            '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b> Mis à jour avec succès! </b> </span>',
              "",
              {
                timeOut: 4000,
                enableHtml: true,
                closeButton: true,
                toastClass: "alert alert-success alert-with-icon",
                positionClass: "toast-top-center"
              }
            );
        // rafraichir la page
    }

    addingroleAndAll(){

    }

    adding(){
        console.log(this.newUser)
        if(this.newUser==null||this.newUser.lname=="" || this.newUser.password=="" || this.newUser.use_matricule=="" || this.newUser.fname=="" || this.newUser.username==""){
            this.toastr.error(
                '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b> Veuillez remplir tous les champs! </b></span>',
                  "",
                  {
                    timeOut: 4000,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: "alert alert-danger alert-with-icon",
                    positionClass: "toast-top-center"
                  }
                );  
        }
        else{
            this.newU=this.userService.addUser(this.newUser).subscribe(
                data=>{
                    window.localStorage.setItem("new_user",JSON.stringify(data))
                    console.log(data)
                }
            )
            // save role
            this.newR={
                id:0,
                pru_label:this.newUser.username,
                name:(this.selectedRole==Profile.ROLE_CHEFHIERARCHIQUE.toString())?Profile.ROLE_CHEFHIERARCHIQUE:(this.selectedRole==Profile.ROLE_CAISSIER.toString())?Profile.ROLE_CAISSIER:Profile.ROLE_ADMINISTRATEUR,
                user_profile_aff:[]
            }
            this.newRole=this.userprofileService.addRole(this.newR).subscribe(
                data=>{
                    window.localStorage.setItem("new_role",JSON.stringify(data))
                    console.log(data)
                }
            );
            // affecter 
            
            /*
            console.log("ROLE_"+this.selectedRole.toUpperCase())
            let rtu:RoleToUserForm={
                username:this.newU.username,
                rolename:"ROLE_"+this.selectedRole.toUpperCase()
            }
            console.log(rtu)
            this.userService.addRoleToUser(rtu.username,rtu.rolename).subscribe(
                data=>{
                    console.log(data);
                    this.getAll()
                }
            ); */
        }
    }

    addutop(){
        this.adding()
        this.newR=JSON.parse(window.localStorage.getItem("new_role"))
            this.newUser=JSON.parse(window.localStorage.getItem("new_user"))
            this.userprofileService.addRoleToUser(this.newR.id,this.newUser.use_id).subscribe(
                data=>{
                    console.log(data)
                    this.getAll()
                }
            )
    }

    getAll(){
        this.users = this.uspService.getAll().subscribe({
      next: res => {
        this.users = Object.entries(res).map(([k, v]) => {
          return {key: k, value: v};
                 });
            }
        }); 
        console.log(this.users)
    }

    getUser(un:String){
        this.selectedU=this.userService.getByUsername(un).subscribe(
            data=>{
                this.selectedU=data;
            }
        )
    }

    extract(sc:String){
        let role:String="ROLE_"+sc.toUpperCase();
        if(sc=="Filtrer par profil:" || sc==""){
            this.getAll();
        }
        else{
            this.users = this.uspService.extract(role).subscribe({
                next: res => {
                  this.users = Object.entries(res).map(([k, v]) => {
                    return {key: k, value: v};
                           });
                      }
                  }); 
                  console.log(this.users)
        }
    }

    refresh(){
        this.getAll();
    }

    searching(){
        this.users = this.userService.search(this.search).subscribe({
            next: res => {
              this.users = Object.entries(res).map(([k, v]) => {
                return {key: k, value: v};
                       });
                  }
              }); 
              console.log(this.users)
    }

    closeeditu(){
        this.edituser=false;
        this.editprofile=false;
    }
    closeeditp(){
        this.editprofile=false;
    }

    pdf(){
        this.userprofileService.pdf().subscribe();
        this.toastr.error(
            '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b> Télechargé avec succès! </b> Veuillez vérifier votre bureau. "usersProfile.pdf" </span>',
              "",
              {
                timeOut: 4000,
                enableHtml: true,
                closeButton: true,
                toastClass: "alert alert-success alert-with-icon",
                positionClass: "toast-top-center"
              }
            );
    }



}
