import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atopbar',
  templateUrl: './atopbar.component.html',
  styleUrls: ['./atopbar.component.css']
})
export class AtopbarComponent implements OnInit {

  user : User;

  constructor() {
    this.user=JSON.parse(localStorage.getItem('user_data'));
  }

  ngOnInit() {
  }

}
