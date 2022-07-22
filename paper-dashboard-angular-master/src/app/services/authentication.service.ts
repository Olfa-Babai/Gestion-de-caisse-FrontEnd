import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

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
    window.localStorage.removeItem('matricule')
    window.localStorage.clear()
  }
  
}
