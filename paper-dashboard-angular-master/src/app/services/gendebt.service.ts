import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GendebtService {

  readonly API_URL = 'http://localhost:8089/api';

  constructor(private httpDebt:HttpClient) { }

  // get all caisses 
  getCaisses(){
    return this.httpDebt.get(`${this.API_URL}/user/caisse/all`);
  }

  // get modes de reglements
  getModes(id){
    return this.httpDebt.get(`${this.API_URL}/user/caisse/modes/${id}`);
  }

  // get all clients 
  getClients(){
    return this.httpDebt.get(`${this.API_URL}/user/clients`);
  }

   //get all orgs
   getOrgs(){
    return this.httpDebt.get(`${this.API_URL}/user/org/all`);
  }

  // get all client's accounts
  getClientAccounts(){
    return this.httpDebt.get(`${this.API_URL}/user/client/account/all`);
  }

  // lister les factures
  getAllFacts(){
    return this.httpDebt.get(`${this.API_URL}/user/debt/all`);
  }

  // recherche générale fl facture
  searchFact(ref){
    let queryParams = new HttpParams();
  queryParams = queryParams.append("ref",ref);
    return this.httpDebt.get(`${this.API_URL}/user/debt/search`,{params:queryParams});
  }

  // get client by facture (juste hooua il choisit le compte = payeur)
  getClientFromFact(genDebt){
    return this.httpDebt.get(`${this.API_URL}/user/client/fact`,genDebt);
  }

  // get fact by id
  getFactById(id){
    return this.httpDebt.get(`${this.API_URL}/user/debt/${id}`);
  }
  
 

}
 