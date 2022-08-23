import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/api/login')) {
      return next.handle(request);
   }
   else if(this.tokenService.getToken ){
      request = request.clone({
        setHeaders: {
            'Authorization': `Bearer ${sessionStorage.getItem("auth-token")}`
        }})
        return next.handle(request);
    }
    
    
  }
}
