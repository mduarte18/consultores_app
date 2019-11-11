import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hisotory-list',
  templateUrl: './hisotory-list.component.html',
  styleUrls: ['./hisotory-list.component.css']
})
export class HisotoryListComponent implements OnInit {

  data: any;
  count: number;
  tempItem: any;

 constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
    this.loader.show();
    this.globalService.getGlobalHistory({}).subscribe(
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

}
