import { Login } from './../models/login';
import { Usuario } from './../models/usuario';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Response } from '../models/response';

const httpOptions={
    headers: new HttpHeaders({
      'Contend-Type': 'aplication/json'
    })
  }

@Injectable({
    providedIn:'root'
})
export class ApiauthService{
    url: string='https://sindicatoservice.azurewebsites.net/api/User/login';

    private usuarioSubject: BehaviorSubject<Usuario>;
    public usuario!:Observable<Usuario>;

    public get usuarioData(): Usuario{
      return this.usuarioSubject.value;
    }

    constructor(private _http: HttpClient) {
        this.usuarioSubject=new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario')!)
        );
        this.usuario=this.usuarioSubject.asObservable();
    }
    login(login: Login): Observable<Response>{
        return this._http.post<Response>(this.url,login,httpOptions).pipe(
          map(res=>{
            if (res.exito===1){
              const user: Usuario=res.data;
              localStorage.setItem('usuario',JSON.stringify(user));
              this.usuarioSubject.next(user);
            }
            return res;
          })
        );
    }
    logout(){
      localStorage.removeItem('usuario');
      this.usuarioSubject.next(null!);
    }
}