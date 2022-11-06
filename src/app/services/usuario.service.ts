import { Usuarios } from './../models/Usuarios';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
const httpOptions={
  headers: new HttpHeaders({
    'Contend-Type': 'aplication/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlPost:string="https://sindicatoservice.azurewebsites.net/api/User/Usuarios"
  urlGet:string="https://sindicatoservice.azurewebsites.net/api/User"
  constructor(private _Http:HttpClient) { }
  get():Observable<Response>{
    return this._Http.get<Response>(this.urlGet);
  }
  add(grupo:Usuarios):Observable<Response>{
    return this._Http.post<Response>(this.urlPost,grupo,httpOptions);
  }
}
