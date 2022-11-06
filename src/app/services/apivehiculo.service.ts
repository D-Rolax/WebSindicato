import { Vehiculo } from './../models/Vehiculos';
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
export class ApivehiculoService {

  url: string='https://sindicatoservice.azurewebsites.net/api/Vehiculos';

  constructor(
    private _http: HttpClient
  ) { 

  }
    getVehiculo(): Observable<Response> {
    return this._http.get<Response>(this.url);
  }
    add(vehiculo: Vehiculo): Observable<Response>{
     return this._http.post<Response>(this.url, vehiculo, httpOptions)
  }
    edit(vehiculo: Vehiculo): Observable<Response>{
    return this._http.put<Response>(this.url, vehiculo, httpOptions)
  }
    delete(id: number): Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`)
  }
}
