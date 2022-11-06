import { Comunidad } from './../models/comunidad';
import { Response } from './../models/response';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions={
  headers: new HttpHeaders({
    'Contend-Type': 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  url:string='https://sindicatoservice.azurewebsites.net/api/Comunidad/'

  constructor(private _http: HttpClient) { }

  get():Observable<Response>{
    return this._http.get<Response>(this.url);
  }
  add(comunidad:Comunidad):Observable<Response>{
    return this._http.post<Response>(this.url,comunidad,httpOptions);
  }
  edit(comunidad:Comunidad):Observable<Response>{
    return this._http.put<Response>(this.url,comunidad,httpOptions);
  }
  delete(id:number):Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`);
  }
}
