import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/global/GLOBAL';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToHistory(){
    GLOBAL.redirectTo('/consultant/history')
  }
}
