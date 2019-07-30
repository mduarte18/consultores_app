import { ToastrService } from 'ngx-toastr';
import { GlobalService } from './../../services/global.service';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/global/GLOBAL';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  public consultant: Consultant = JSON.parse(localStorage.getItem('user_data'));
  balanceUser: string = "0$";

  histories$: any;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService) {
    this.loader.show();
    console.log(this.consultant);
    this.globalService.getBalanceConsultant(this.consultant.id).subscribe(
      result => { this.balanceUser = result; this.loader.hide() },
      error => {console.log(error); this.loader.hide() }
    );

   }

  ngOnInit() {
  }

  goToHistory(){
    GLOBAL.redirectTo('/consultant/history')
  }
}
