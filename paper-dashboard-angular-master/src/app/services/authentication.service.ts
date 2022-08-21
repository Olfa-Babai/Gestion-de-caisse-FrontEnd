import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly API_URL = 'http://localhost:8089/api'

  constructor(private httpAuth:HttpClient, private tokenService:TokenStorageService) { }

  authenticate(matricule, testU) {
    if (testU==true) {
      window.localStorage.setItem('matricule', matricule)
      console.log("session"+window.localStorage.getItem('matricule'))
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = window.localStorage.getItem('matricule')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    this.tokenService.signOut();
  }

  login(f){
    return this.httpAuth.post(`${this.API_URL}/add`,f);
  }
  //login yrajaaa token
  logIn(username,pwd){
    var formData: any = new FormData();
    formData.append("username",username);
    formData.append("password",pwd);
    return this.httpAuth.post(`${this.API_URL}/login`,formData);
  }
}
