import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL = 'http://localhost:8089/user'

  constructor(private httpUser:HttpClient) { }
// ajout user
addUser(user){
  return this.httpUser.post(`${this.API_URL}/add`,user);
}
// delete
deleteu(id){
  return this.httpUser.delete(`${this.API_URL}/delete/${id}`);
}
// update
editu(user){
  return this.httpUser.put(`${this.API_URL}/update`,user);
}
// list
showall(){
  return this.httpUser.get(`${this.API_URL}/all`);
}
// get by id
getById(id){
  return this.httpUser.get(`${this.API_URL}/get/${id}`);
}
// search
search(matricule){
  let queryParams = new HttpParams();
    queryParams = queryParams.append("matricule",matricule);
  return this.httpUser.get(`${this.API_URL}/search`,{params:queryParams});
}

}
