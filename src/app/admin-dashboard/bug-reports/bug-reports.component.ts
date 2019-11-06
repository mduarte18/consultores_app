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

  data: any;
  count: number;
  tempItem: any;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
    this.loader.show();
    this.globalService.getAllBugs({}).subscribe(
      result => {
        console.log(result);
        this.data = result;
        this.loader.hide();

      },
      error => {
        console.log(error)
        this.loader.hide();

      }
    )
  }

  ngOnInit() {
  }

  openModal(content, item){
    this.tempItem=item;
    this.modal.open(content);
  }

  close(){
    this.tempItem={};
    this.modal.dismissAll();
  }

}
