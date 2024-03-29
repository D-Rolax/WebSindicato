import { Observable } from 'rxjs';
import { Usuario } from './../models/usuario';
import { ApiauthService } from './../services/apiauth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    /**
     *
     */
    constructor(private apiauthService:ApiauthService) {
        
        
    }
    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        const usuario = this.apiauthService.usuarioData;
        if(usuario){
            request =request.clone({
                setHeaders:{
                    Authorization: `Bearer ${usuario.token}`
                }
            });
        }
        return next.handle(request);
    }
}