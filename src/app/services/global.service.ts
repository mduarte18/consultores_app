import { Dating } from './../interfaces/Dating';
import { User } from './../interfaces/User';
import { GLOBAL } from './../global/GLOBAL';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  apiUrl = GLOBAL.apiUrl;

  constructor(private httpClient: HttpClient) {
    console.log('Servicio Global.');
  }

  singInChecked(type, mail, pass): Observable<any> {
    if ('user' === type) {
      return this.httpClient.post(this.apiUrl + '/user/singin', { email: mail, password: pass });
    }
    if ('consultant' === type) {
      return this.httpClient.post(this.apiUrl + '/consultant/singin', { email: mail, password: pass });
    }
    if ('admin' === type) {
      return this.httpClient.post(this.apiUrl + '/user/admin_singin', { email: mail, password: pass, role: 'AD' });
    }
    return null;
  }

  create_user(user: User): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/user', user);
  }

  new_appointment(user: User): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/user', user);
  }

  getUserHistories(user_id: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/historyuser/all_histories', { user_id: user_id });
  }

  uploadDeposit(params): Observable<any>{
    return this.httpClient.post(this.apiUrl + '/deposit/upload', params);
  }

  getBalanceUser(user_id): Observable<any>{
    return this.httpClient.post(this.apiUrl+'/balance_user/get_balance',{user_id: user_id} );
  }

  updateUserProfile(user:User):Observable<any>{
    return this.httpClient.put(this.apiUrl+'/user/'+user.id, user);
  }

  getAllConsultants(params): Observable<any>{
    return this.httpClient.post(this.apiUrl + '/consultant/all_consultants', params);
  }

  new_dating(dating: Dating): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating', dating);
  }
}
