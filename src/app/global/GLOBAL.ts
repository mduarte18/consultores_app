export class GLOBAL {
  static apiUrl = 'http://localhost:8000/api';

  static redirectTo(url) {
    const landingUrl = 'http://' + window.location.host + url;
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
}
