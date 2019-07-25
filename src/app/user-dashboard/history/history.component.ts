import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { User } from './../../interfaces/User';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public user: User;

  histories$: any;


  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService) {

    this.user = JSON.parse(localStorage.getItem('user_data'));
      this.getHistories();

  }

  ngOnInit() {
    this.getHistories();
  }

  getHistories(): void {
    this.loader.show();
    this.globalService.getUserHistories(this.user.id).subscribe(
      response => {
        this.histories$ = response
        console.log(this.histories$);
        this.loader.hide();

      },
      error => { console.log(error); this.loader.hide(); });
  }

}
