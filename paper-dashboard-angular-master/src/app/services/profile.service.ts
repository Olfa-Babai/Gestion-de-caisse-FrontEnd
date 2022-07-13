import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly API_URL = 'http://localhost:8089/profile'

  constructor(private httpProfile:HttpClient) { }
// ajout
addp(p,matricule){
  let queryParams = new HttpParams();
  queryParams = queryParams.append("matricule",matricule);
  return this.httpProfile.post(`${this.API_URL}/add`,p,{params:queryParams});

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
}
