import { Grupos } from './../models/grupos';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/response';

const httpOptions={
  headers: new HttpHeaders({
    'Contend-Type': 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  url:string='https://sindicatoservice.azurewebsites.net/api/Grupo/';

  constructor(private _http:HttpClient) { }

  get():Observable<Response>{
    return this._http.get<Response>(this.url);
  }
  add(grupo:Grupos):Observable<Response>{
    return this._http.post<Response>(this.url,grupo,httpOptions);
  }
  edit(grupo:Grupos):Observable<Response>{
    return this._http.put<Response>(this.url,grupo,httpOptions);
  }
  delete(id:number):Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`);
  }
}

