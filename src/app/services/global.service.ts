import { Consultant } from './../interfaces/Consultant';
import { Dating } from './../interfaces/Dating';
import { User } from './../interfaces/User';
import { GLOBAL } from './../global/GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  apiUrl = GLOBAL.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'authkey',
      'userid': '1'
    })
  };

  constructor(private httpClient: HttpClient) {
    console.log(this.apiUrl);
  }

  singInChecked(type, mail, pass): Observable<any> {
    if ('user' === type) {
      return this.httpClient.post(this.apiUrl + '/user/singin', { email: mail, password: pass }, this.httpOptions);
    }
    if ('consultant' === type) {
      return this.httpClient.post(this.apiUrl + '/consultant/singin', { email: mail, password: pass }, this.httpOptions);
    }
    if ('admin' === type) {
      return this.httpClient.post(this.apiUrl + '/user/admin_singin', { email: mail, password: pass, role: 'AD' }, this.httpOptions);
    }
    return null;
  }

  create_user(user: User): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/user', user, this.httpOptions);
  }

  new_appointment(user: User): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/user', user, this.httpOptions);
  }

  getUserHistories(user_id: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/historyuser/all_histories', { user_id: user_id }, this.httpOptions);
  }

  getConsultantHistories(user_id: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultanthistory/all_histories', { consultant_id: user_id }, this.httpOptions);
  }

  uploadDeposit(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/deposit/upload', params, this.httpOptions);
  }

  getBalanceUser(user_id): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/balance_user/get_balance', { user_id: user_id }, this.httpOptions);
  }

  getBalanceConsultant(consultant_id): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/balance_consultant/get_balance', { consultant_id: consultant_id }, this.httpOptions);
  }

  updateUserProfile(user: User): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/user/' + user.id, user, this.httpOptions);
  }

  updateConsultantProfile(user: Consultant): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/consultant/' + user.id, user, this.httpOptions);
  }

  getAllConsultants(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultant/all_consultants', params, this.httpOptions);
  }//all_activate_consultants

  getAllActivateConsultants(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultant/all_activate_consultants', params, this.httpOptions);
  }//

  activateOrDesactivateConsultants(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultant/activate_or_desactivate_consultant', params, this.httpOptions);
  }

  new_dating(dating: Dating): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating', dating, this.httpOptions);
  }

  getDatingsForConsultant(consultant_id): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/datings_by_consultant', { consultant_id: consultant_id }, this.httpOptions);
  }

  getDatingsByUser(user_id): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/datings_by_user', { user_id: user_id }, this.httpOptions);
  }

  responseRequest(dating: Dating): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/response_request', dating, this.httpOptions);
  }

  cancelDating(dating_id): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/cancelled_dating', { dating_id: dating_id }, this.httpOptions);
  }

  getAllDeposits(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/deposit/get_all_deposits', params, this.httpOptions);
  }
  getAllPendingDeposits(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/deposit/get_all_pending_deposits', params, this.httpOptions);
  }
  updateStatusDeposit(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/deposit/update_deposit_status', params, this.httpOptions);
  }

  createAccountForConsultant(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/account_consultant', params, this.httpOptions);
  }

  getAccountsForConsultant(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/account_consultant/get_account_consultant', params, this.httpOptions);
  }

  updateUseAcct(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/account_consultant/update_use_acct', params, this.httpOptions);
  }

  createRetirement(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/retirement/submit_retirement', params, this.httpOptions);
  }
  createParameter(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/parameter', params, this.httpOptions);
  }
  updateParameter(id,params): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/parameter/'+id, params, this.httpOptions);
  }
  allParameters(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/parameter/all', params, this.httpOptions);
  }

  deleteParameters(id,params): Observable<any> {
    return this.httpClient.delete(this.apiUrl + '/parameter/'+id, params);
  }
}
