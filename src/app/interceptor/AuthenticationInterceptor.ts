import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    public token : any; // = localStorage.getItem("jwt");    
    constructor(){
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(localStorage.getItem('jwt') !== null){
            this.token = localStorage.getItem("jwt");
            req = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this.token}`),
              });
             
        }
        //req.headers.append('Authorization', `Bearer ${this.token}`)
        return next.handle(req);
    }
}