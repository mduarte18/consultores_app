import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bug-reports',
  templateUrl: './bug-reports.component.html',
  styleUrls: ['./bug-reports.component.css']
})
export class BugReportsComponent implements OnInit {

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) { }

  ngOnInit() {
  }

}
