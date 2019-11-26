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
      Authorization: 'authkey',
      userid: '1'
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

  getUserHistories(userId: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/historyuser/all_histories', { user_id: userId }, this.httpOptions);
  }

  getConsultantHistories(consultantId: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultanthistory/all_histories', { consultant_id: consultantId }, this.httpOptions);
  }

  uploadDeposit(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/deposit/upload', params, this.httpOptions);
  }

  getBalanceUser(userId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/balance_user/get_balance', { user_id: userId }, this.httpOptions);
  }

  getBalanceConsultant(consultantId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/balance_consultant/get_balance', { consultant_id: consultantId }, this.httpOptions);
  }

  updateUserProfile(user: User): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/user/' + user.id, user, this.httpOptions);
  }

  updateConsultantProfile(user: Consultant): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/consultant/' + user.id, user, this.httpOptions);
  }

  getAllConsultants(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultant/all_consultants', params, this.httpOptions);
  }// all_activate_consultants

  getAllActivateConsultants(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultant/all_activate_consultants', params, this.httpOptions);
  }//

  activateOrDesactivateConsultants(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultant/activate_or_desactivate_consultant', params, this.httpOptions);
  }

  new_dating(dating: Dating): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating', dating, this.httpOptions);
  }

  getDatingsForConsultant(consultantId, datingStatus): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/datings_by_consultant',
                        { consultant_id: consultantId, dating_status: datingStatus }
                        , this.httpOptions);
  }

  getDatingsByUser(userId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/datings_by_user', { user_id: userId }, this.httpOptions);
  }

  responseRequest(dating: Dating): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/response_request', dating, this.httpOptions);
  }

  cancelDating(datingId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/cancelled_dating', { dating_id: datingId }, this.httpOptions);
  }

  finishDating(datingId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/finished_dating', { dating_id: datingId }, this.httpOptions);
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

  updateAccountForConsultant(id, params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/account_consultant/' + id, params, this.httpOptions);
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
  updateParameter(id, params): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/parameter/' + id, params, this.httpOptions);
  }
  allParameters(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/parameter/all', params, this.httpOptions);
  }
  deleteParameters(id, params): Observable<any> {
    return this.httpClient.delete(this.apiUrl + '/parameter/' + id, params);
  }
  getPaymentsUser(userId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/payment/get_payments_users', { user_id: userId }, this.httpOptions);
  }
  getPaymentsConsultant(consultantId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/payment/get_payments_consultant', { consultant_id: consultantId }, this.httpOptions);
  }
  getDepositsUser(userId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/deposit/deposit_user', { user_id: userId }, this.httpOptions);
  }
  limitFiveDatingUser(userId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/user/limit_five_dating', { user_id: userId }, this.httpOptions);
  }
  limitFiveDatingConsultant(consultantId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/consultant/limit_five_dating', { consultant_id: consultantId }, this.httpOptions);
  }
  getRetirementsConsultant(consultantId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/retirement/get_retirement_consultant', { consultant_id: consultantId }, this.httpOptions);
  }

  reporteDatingForState(): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/report_for_states', {}, this.httpOptions);
  }
  reporteDatingForCareers(): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating/report_for_careers', {}, this.httpOptions);
  }
  changePassword(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/user/change_password/', params, this.httpOptions);
  }
  currentPassword(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/user/current_password/', params, this.httpOptions);
  }
  getRequestRetirements(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/retirement/get_request_retirements', params, this.httpOptions);
  }
  uploadRetirement(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/retirement/upload', params, this.httpOptions);
  }
  rejectRetirement(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/retirement/reject_retirement', params, this.httpOptions);
  }

  getBanks(params): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/bank', this.httpOptions);
  }
  saveBanks(bank): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/bank', bank, this.httpOptions);
  }

  updateBanks(bank, id): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/bank/' + id, bank, this.httpOptions);
  }

  deleteBanks(bank, id): Observable<any> {
    return this.httpClient.delete(this.apiUrl + '/bank/' + id, bank);
  }

  createReportForDating(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/advisory_report', params, this.httpOptions);
  }

  getAllReports(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/advisory_report/get_all_reports', params, this.httpOptions);
  }

  createReportForBug(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/bug_report', params, this.httpOptions);
  }

  getAllBugs(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/bug_report/get_all_reports', params, this.httpOptions);
  }

  getGlobalHistory(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/historyuser/global_history', params, this.httpOptions);
  }

  createUserHistory(params): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/historyuser', params, this.httpOptions);
  }

  sendFiles(formData): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating_attach', formData, this.httpOptions);
  }

  getAllAttached(datingId): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/dating_attach/get_all_attached', {dating_id: datingId}, this.httpOptions);
  }
}
