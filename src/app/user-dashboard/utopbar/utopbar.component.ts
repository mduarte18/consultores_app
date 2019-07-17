import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utopbar',
  templateUrl: './utopbar.component.html',
  styleUrls: ['./utopbar.component.css']
})
export class UtopbarComponent implements OnInit {

  user : User;

  constructor() {
    this.user=JSON.parse(localStorage.getItem('user_data'));
  }

  ngOnInit() {
  }

}
