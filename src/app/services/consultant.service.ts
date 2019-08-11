import { GLOBAL } from './../global/GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultant } from '../interfaces/Consultant';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  apiUrl = GLOBAL.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  constructor(private httpClient: HttpClient) {
    console.log('Servicio de Asesores Iniciado.');
  }

  get_consultant(consul: number): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/consultant/' + consul, this.httpOptions);
  }

  create_consultant(consul: Consultant): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultant', consul, this.httpOptions);
  }
}
