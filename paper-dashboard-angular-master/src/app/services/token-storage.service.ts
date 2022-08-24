import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLE_KEY = 'auth-role';
const DEBT_KEY = 'debt-role';
const AGENT_KEY = 'auth-agent';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  
  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user): void {
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
  public saveRole(role):void{
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(role));
  }
  public getRole():any{
    return JSON.parse(sessionStorage.getItem(ROLE_KEY));
  }

  public saveDebt(debt):void{
    window.sessionStorage.removeItem(DEBT_KEY);
    window.sessionStorage.setItem(DEBT_KEY, JSON.stringify(debt));
  }
  public getDebt():any{
    return JSON.parse(sessionStorage.getItem(DEBT_KEY));
  }

  public saveAgent(agent):void{
    window.sessionStorage.removeItem(AGENT_KEY);
    window.sessionStorage.setItem(AGENT_KEY, JSON.stringify(agent));
  }
  public getAgent():any{
    return JSON.parse(sessionStorage.getItem(AGENT_KEY));
  }
}