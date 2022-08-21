import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from 'app/pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL = 'http://localhost:8089/api'

  constructor(private httpUser:HttpClient) { }
// ajout user
addUser(user){  
  return this.httpUser.post(`${this.API_URL}/user/save`,user);
}
// delete 
deleteu(user){
  return this.httpUser.delete(`${this.API_URL}/user/delete`,user);
}
// update
editu(id,user){
  return this.httpUser.put(`${this.API_URL}/user/update/${id}`,user);
}
// list
showall(){
  return this.httpUser.get(`${this.API_URL}/users`);
}
// get by id
getById(id){
  return this.httpUser.get(`${this.API_URL}/get/${id}`);
}
// get dom role 
getRole(username){
  let queryParams = new HttpParams();
  queryParams = queryParams.append("username",username);
  return this.httpUser.get(`${this.API_URL}/user/role/roleD`,{params:queryParams});
}
// search
search(matricule){
  let queryParams = new HttpParams();
    queryParams = queryParams.append("matricule",matricule);
  return this.httpUser.get(`${this.API_URL}/user/role/search`,{params:queryParams});
}

admins(){
return  this.httpUser.get(`${this.API_URL}/user/role/nba`);
}
caissiers(){
  return  this.httpUser.get(`${this.API_URL}/user/role/nbca`);
}
chs(){
  return  this.httpUser.get(`${this.API_URL}/user/role/nbch`);
}
// get by matricule
getByUsername(username){
  let queryParams = new HttpParams();
    queryParams = queryParams.append("username",username);
    
  return this.httpUser.get(`${this.API_URL}/user/get`,{params:queryParams});
}
// check the role
check(id,role){
  let queryParams = new HttpParams();
    queryParams = queryParams.append("role",role);
  return  this.httpUser.get(`${this.API_URL}/user/check/${id}`,{params:queryParams});
}
// if u exists
uexists(login,pwd){
  let queryParams = new HttpParams();
    queryParams = queryParams.append("login",login);
    queryParams = queryParams.append("pwd",pwd);
    return this.httpUser.get(`${this.API_URL}/uexists/`,{params:queryParams});
}
// /user/profiles/{id}
getProfilesU(id){
  return this.httpUser.get(`${this.API_URL}/user/profiles/${id}`);
}

addRoleToUser(username,role){
  var formData: any = new FormData();
  formData.append("username",username);
  formData.append("rolename",role);
  return this.httpUser.post(`${this.API_URL}/role/addtouser`,formData);
}

}
