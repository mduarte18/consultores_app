import { GLOBAL } from './../../global/GLOBAL';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-dashboard',
  templateUrl: './c-dashboard.component.html',
  styleUrls: ['./c-dashboard.component.css']
})
export class CDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logOut(): void {
    localStorage.clear();
    GLOBAL.redirectTo('/home');
  }

}
