import { GlobalService } from 'src/app/services/global.service';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface History {
  created_at: string
  description: string
  id: number
  movement_type: string
  updated_at: string
  consultant_id: number
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public user: Consultant;

  histories$: any;


  displayedColumns: string[] = ['movement_type','description', 'created_at'];
  dataSource = new MatTableDataSource<History>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService) {

    this.user = JSON.parse(localStorage.getItem('user_data'));
      this.getHistories();

  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getHistories();
  }

  getHistories(): void {
    this.loader.show();
    this.globalService.getConsultantHistories(this.user.id).subscribe(
      response => {
        this.histories$ = response
        this.dataSource.data = response;
        this.loader.hide();

      },
      error => { console.log(error); this.loader.hide(); });
  }

}
