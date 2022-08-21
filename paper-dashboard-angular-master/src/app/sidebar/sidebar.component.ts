import { Component, OnInit } from '@angular/core';
import { AdmUser } from 'app/models/AdmUser';
import { AuthenticationService } from 'app/services/authentication.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import { UserService } from 'app/services/user.service';
import { UserprofileService } from 'app/services/userprofile.service';
import { Router, ActivatedRoute } from '@angular/router';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  //  { path: '/home',    title: 'Acceuil',        icon:'nc-layout-11', class: '' },
    { path: '/user',          title: 'Votre Profil',      icon:'nc-single-02',  class: '' },
    { path: '/users',         title: 'Les utilisateurs',      icon:'nc-tile-56',    class: '' },
    { path: '/caisse',     title: 'Caisse',         icon:'nc-bank',       class: '' },
    { path: '/stat',         title: 'Statistique',             icon:'nc-chart-pie-36',    class: '' },
    //{ path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
   // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    
    
   // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

export const ROUTES1: RouteInfo[] = [
   // { path: '/home',    title: 'Acceuil',        icon:'nc-layout-11', class: '' },
    { path: '/user',          title: 'Votre Profil',      icon:'nc-single-02',  class: '' },
    { path: '/caisse',     title: 'Caisse',         icon:'nc-bank',       class: '' }
];

export const ROUTES2: RouteInfo[] = [
  //  { path: '/home',    title: 'Acceuil',        icon:'nc-layout-11', class: '' },
    { path: '/user',          title: 'Votre Profil',      icon:'nc-single-02',  class: '' },
    { path: '/caisse',     title: 'Caisse',         icon:'nc-bank',       class: '' },
    { path: '/stat',         title: 'Statistique',             icon:'nc-chart-pie-36',    class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(private router: Router,private userService: UserService, private uspService : UserprofileService,private loginservice: AuthenticationService, private tokenService:TokenStorageService) { }
    ngOnInit() {
        if(this.tokenService.getRole().name=="ROLE_CAISSIER"){
            this.menuItems = ROUTES1.filter(menuItem => menuItem);
        }
        else if (this.tokenService.getRole().name=="ROLE_ADMINISTRATEUR")
       { this.menuItems = ROUTES.filter(menuItem => menuItem); }
       else {
        this.menuItems = ROUTES2.filter(menuItem => menuItem);
       }
    }
}
