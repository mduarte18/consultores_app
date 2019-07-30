import { GlobalService } from 'src/app/services/global.service';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public user: Consultant;

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
    this.globalService.getConsultantHistories(this.user.id).subscribe(
      response => {
        this.histories$ = response
        this.loader.hide();

      },
      error => { console.log(error); this.loader.hide(); });
  }

}
