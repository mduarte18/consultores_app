import { GLOBAL } from './../../global/GLOBAL';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-dashboard',
  templateUrl: './u-dashboard.component.html',
  styleUrls: ['./u-dashboard.component.css']
})
export class UDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logOut(): void {
    localStorage.clear();
    GLOBAL.redirectTo('/home');
  }

}
