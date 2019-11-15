import { HistoryUser } from './../../interfaces/HistoryUser';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { User } from './../../interfaces/User';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface History {
  created_at: string
  description: string
  id: number
  movement_type: string
  updated_at: string
  user_id: number
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, AfterViewInit {

  public user: User = JSON.parse(localStorage.getItem('user_data'));
  histories$: any;


  displayedColumns: string[] = ['movement_type','description', 'created_at'];
  dataSource = new MatTableDataSource<History>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getHistories();

  }

  ngAfterViewInit(): void {
  }

  getHistories(): void {
    this.loader.show();
    this.globalService.getUserHistories(this.user.id).subscribe(
      response => {
        this.histories$ = response;
        console.log(response);
        this.dataSource.data = response;
        this.loader.hide();
      },
      error => { console.log(error); this.loader.hide(); });
  }

}
