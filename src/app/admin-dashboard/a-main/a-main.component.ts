import { GLOBAL } from './../../global/GLOBAL';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-main',
  templateUrl: './a-main.component.html',
  styleUrls: ['./a-main.component.css']
})
export class AMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  logOut(): void {
    localStorage.clear();
    GLOBAL.redirectTo('/home');
  }

}
