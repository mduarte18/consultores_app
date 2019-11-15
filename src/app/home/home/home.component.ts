import { GLOBAL } from './../../global/GLOBAL';
import { Parameter } from './../../interfaces/Parameter';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  parameters: Parameter[];
  user_type = localStorage.getItem('user_type');

  constructor(private globalService: GlobalService) {
    console.log('Home iniciado');
    console.log(localStorage);
    console.log(this.user_type);
    this.globalService.allParameters({}).subscribe(
      result => {
        this.parameters = result;
        localStorage.setItem('app_parameters', JSON.stringify(this.parameters));
        // console.log(localStorage);
      }
    );

    switch (this.user_type) {
      case 'A':
          GLOBAL.redirectTo('/admin/dashboard');
        break;
      case 'C':
          GLOBAL.redirectTo('/consultant/dashboard');
        break;
      case 'U':
          GLOBAL.redirectTo('/user/dashboard');
        break;
    }

  }

  ngOnInit() {
  }

}
