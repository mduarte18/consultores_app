import { HistoryUser } from './../../interfaces/HistoryUser';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { User } from './../../interfaces/User';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit,OnDestroy {

  public user: User = JSON.parse(localStorage.getItem('user_data'));
  histories$: any;
  // dtOptions: DataTables.Settings = {};




  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService) {
    this.getHistories();
  }

  ngOnInit() {

    // this.getHistories();
    // this.dtOptions = {
    //   ajax: (dataTablesParameters: any=this.user, callback) => {
    //     this.globalService.getUserHistories(this.user.id).subscribe(resp => {
    //         this.histories$ = resp;
    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp.recordsFiltered,
    //           data: []
    //         });
    //       });
    //   },
    //   columns: [{
    //     title: 'Movimiento',
    //     data: 'movement_type'
    //   }, {
    //     title: 'Descripción',
    //     data: 'description'
    //   }, {
    //     title: 'Fecha',
    //     data: 'created_at'
    //   }]
    // };



  }

  ngOnDestroy(): void {
  }

  getHistories(): void {
    this.loader.show();
    this.globalService.getUserHistories(this.user.id).subscribe(
      response => {
        this.histories$ = response;

        this.loader.hide();
      },
      error => { console.log(error); this.loader.hide(); });
  }

}
