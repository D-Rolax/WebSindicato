import { Horario } from './../models/horario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class HorarioService {
  url:string="hhttps://sindicatoservice.azurewebsites.net/api/horario"
  constructor(private _Http:HttpClient) { }
  get():Observable<Response>{
    return this._Http.get<Response>(this.url);
  }
  add(horario:Horario):Observable<Response>{
    return this._Http.post<Response>(this.url,horario,httpOptions);
  }
}

