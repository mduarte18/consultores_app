import { Consultant } from './../interfaces/Consultant';
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
    console.log(this.apiUrl);
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

  getConsultantHistories(user_id: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultanthistory/all_histories', { consultant_id: user_id });
  }

  uploadDeposit(params): Observable<any>{
    return this.httpClient.post(this.apiUrl + '/deposit/upload', params);
  }

  getBalanceUser(user_id): Observable<any>{
    return this.httpClient.post(this.apiUrl+'/balance_user/get_balance',{user_id: user_id} );
  }

  getBalanceConsultant(consultant_id): Observable<any>{
    return this.httpClient.post(this.apiUrl+'/balance_consultant/get_balance',{consultant_id: consultant_id} );
  }

  updateUserProfile(user:User):Observable<any>{
    return this.httpClient.put(this.apiUrl+'/user/'+user.id, user);
  }

  updateConsultantProfile(user:Consultant):Observable<any>{
    return this.httpClient.put(this.apiUrl+'/consultant/'+user.id, user);
  }

  getAllConsultants(params): Observable<any>{
    return this.httpClient.post(this.apiUrl + '/consultant/all_consultants', params);
  }

  new_dating(dating: Dating): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating', dating);
  }

  getDatingsForConsultant(consultant_id): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/datings_by_consultant', {consultant_id:consultant_id});
  }

  getDatingsByUser(user_id): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/datings_by_user', {user_id:user_id});
  }

  responseRequest(dating:Dating): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/response_request', dating);
  }
}
