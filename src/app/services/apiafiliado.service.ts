import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ApiafiliadoService {
  url:string='https://localhost:44331/api/Afiliado';
  constructor(private _http:HttpClient) { 
    
  }
  delete(id:number):Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`)
  }
}
