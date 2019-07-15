import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctopbar',
  templateUrl: './ctopbar.component.html',
  styleUrls: ['./ctopbar.component.css']
})
export class CtopbarComponent implements OnInit {

  user : User;

  constructor() {
    this.user=JSON.parse(localStorage.getItem('user_data'));
  }

  ngOnInit() {
  }

}
