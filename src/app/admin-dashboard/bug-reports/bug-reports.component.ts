import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from './../../services/global.service';

export interface BugHistory {
  consulant_lastname: string
  consultant_id: number
  consultant_name: string
  created_at: string
  id: number
  report_message: string
  report_title: string
  updated_at: string
}

@Component({
  selector: 'app-bug-reports',
  templateUrl: './bug-reports.component.html',
  styleUrls: ['./bug-reports.component.css']
})
export class BugReportsComponent implements OnInit {

  data: any;
  count: number;
  tempItem: any;

  displayedColumns: string[] = ['id','consultant_name', 'created_at', 'report_title','actions'];
  dataSource = new MatTableDataSource<BugHistory>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
    this.loader.show();
    this.globalService.getAllBugs({}).subscribe(
      result => {
        console.log(result);
        this.data = result;
        this.dataSource.data = result;
        this.loader.hide();

      },
      error => {
        console.log(error)
        this.loader.hide();

      }
    )
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openModal(content, item) {
    this.tempItem = item;
    this.modal.open(content);
  }

  close() {
    this.tempItem = {};
    this.modal.dismissAll();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
