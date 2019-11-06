import { GLOBAL } from './../../global/GLOBAL';
import { Bank } from './../../interfaces/Bank';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from 'src/app/services/global.service';
import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utopbar',
  templateUrl: './utopbar.component.html',
  styleUrls: ['./utopbar.component.css']
})
export class UtopbarComponent implements OnInit {

  user : User;
  banks:Bank[];

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService) {
    this.user=JSON.parse(localStorage.getItem('user_data'));
    this.getBanks();
  }

  ngOnInit() {
  }

  getBanks() {
    this.loader.show();
    this.globalService.getBanks({}).subscribe(
      result => {
        this.banks = result;
        console.log(result)
        this.loader.hide();
      },
      error => {
        this.loader.hide();
        console.log(error);
      }
    );
  }

  logOut(): void {
    localStorage.clear();
    GLOBAL.redirectTo('/home');
  }

}
