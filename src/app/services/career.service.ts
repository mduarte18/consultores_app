import { Injectable } from '@angular/core';
import { GLOBAL } from './../global/GLOBAL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CareerService {

  apiUrl = GLOBAL.apiUrl;

  constructor(private httpClient: HttpClient) {
    console.log('Servicio de Carreras Iniciado.');
  }

  get_careers(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/career');
  }

}
