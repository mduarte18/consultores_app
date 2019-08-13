import { HistoryUser } from './../../interfaces/HistoryUser';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { User } from './../../interfaces/User';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
declare const $: any;


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit,AfterViewInit {

  public user: User = JSON.parse(localStorage.getItem('user_data'));
  histories$: any;

  @ViewChild("datatable", {static:true}) el: ElementRef;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    // $(this.el.nativeElement).destroy();
    this.getHistories();

  }

  ngAfterViewInit(): void {
    console.log(this.el)
    // this.tim = $(this.el.nativeElement).DataTable();

  }



  getHistories(): void {
    this.loader.show();
    this.globalService.getUserHistories(this.user.id).subscribe(
      response => {
        this.histories$ = response;
        $(this.el.nativeElement).DataTable();

        this.loader.hide();
      },
      error => { console.log(error); this.loader.hide(); });
  }

}
