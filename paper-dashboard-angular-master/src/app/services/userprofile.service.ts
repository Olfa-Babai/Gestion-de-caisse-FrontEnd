import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  readonly API_URL = 'http://localhost:8089/api'

  constructor(private httpProfile:HttpClient) { }
// ajout
/*
addp(idp,idu){
  let queryParams = new HttpParams();
 // queryParams = queryParams.append("matricule",matricule);
// return this.httpProfile.post(`${this.API_URL}/add`,p,{params:queryParams});
}

// delete
deleteu(id){
  return this.httpProfile.delete(`${this.API_URL}/delete/${id}`);
}
// update
editu(p){
  return this.httpProfile.put(`${this.API_URL}/update`,p);
}
// list
showall(){
  return this.httpProfile.get(`${this.API_URL}/all`);
}
// get by id
getById(id){
  return this.httpProfile.get(`${this.API_URL}/search/${id}`);
}


/api/user/role/add/{idp}/{idu} => add a role to a user
/api/user/role/all => get all users and their roles
/api/user/role/pdf => pdf download ( naamel notif "check ur desktop")
/api/user/role/extract + r => extract users with a certain role 
*/

// get all profiles ml id mtaa user 
getByProfiles(idu){
  return this.httpProfile.get(`${this.API_URL}/getprofiles/${idu}`);
}

extract(profile){
  //role
  let queryParams = new HttpParams();
  queryParams = queryParams.append("profile",profile);
  return this.httpProfile.get(`${this.API_URL}/user/role/extract`,{params:queryParams});
}

addRole(role){  
  return this.httpProfile.post(`${this.API_URL}/user/role/save`,role);
}

addRoleToUser(idu,idp){
  return this.httpProfile.post(`${this.API_URL}/user/role/add/${idp}/${idu}`,{});
}

getAll(){
  return this.httpProfile.get(`${this.API_URL}/user/role/all`);
}

pdf(){
  return this.httpProfile.get(`${this.API_URL}/user/role/pdf`);
}

}
