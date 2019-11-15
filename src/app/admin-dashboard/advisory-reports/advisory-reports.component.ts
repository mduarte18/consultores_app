import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface AdvisoryReport {
  attach_document: string
  birthdate: string
  consulant_lastname: string
  consultant_name: string
  created_at: string
  dating_id: number
  email: string
  for_date: string
  id: number
  identification_document: string
  lastname: string
  name: string
  password: string
  phone_number: string
  remember_token: string
  report_message: string
  report_title: string
  state: string
  updated_at: string
}

@Component({
  selector: 'app-advisory-reports',
  templateUrl: './advisory-reports.component.html',
  styleUrls: ['./advisory-reports.component.css']
})
export class AdvisoryReportsComponent implements OnInit {

  data: any;
  count: number;
  tempItem: any;

  displayedColumns: string[] = ['id','consultant_name', 'created_at', 'report_title','actions'];
  dataSource = new MatTableDataSource<AdvisoryReport>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
    this.loader.show();
    this.globalService.getAllReports({}).subscribe(
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
