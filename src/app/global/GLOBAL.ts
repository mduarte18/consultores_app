import { Parameter } from './../interfaces/Parameter';
export class GLOBAL {
  // static apiUrl = 'http://localhost:8000/api';
  static apiUrl = window.location.host.includes('localhost') ? 'http://localhost:8000/api' : 'https://cors-anywhere.herokuapp.com/https://murmuring-river-89792.herokuapp.com/api';
  static uploadsUrl = window.location.host.includes('localhost') ? 'http://localhost:8000/uploads/' : 'https://murmuring-river-89792.herokuapp.com/uploads/';
  // static apiUrl = 'https://murmuring-river-89792.herokuapp.com/api';


  static redirectTo(url) {
    const landingUrl = 'http://' + window.location.host + url;
    console.log(landingUrl);
    window.location.href = landingUrl;
  }

  static init() {
    if (typeof (Storage) !== undefined) {
      if (localStorage.getItem('user_data')) {
        switch (localStorage.getItem('user_type')) {
          case 'U': this.redirectTo('dashboard/user'); break;
          case 'C': this.redirectTo('dashboard/consultant'); break;
          case 'A': this.redirectTo('dashboard/admin'); break;
        }
      }
    }
  }

  static getParameter(param:string) {
    if (typeof (Storage) !== undefined) {
      if (localStorage.getItem('app_parameters')) {
        let parameters:Parameter[] = JSON.parse(localStorage.getItem('app_parameters'));
        console.log(parameters);
        let result=parameters.find(x => x.name === param).value;
        console.log(result);
        return result;
      }
    }
  }

  static zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }
}
