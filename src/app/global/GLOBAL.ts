export class GLOBAL {
  // static apiUrl = 'http://localhost:8000/api';
  static apiUrl = window.location.host.includes('localhost') ? '/api' : 'https://murmuring-river-89792.herokuapp.com/api';
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
}
