import { GLOBAL } from 'src/app/global/GLOBAL';
import { Consultant } from './../../interfaces/Consultant';
import { GlobalService } from 'src/app/services/global.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datings: any[];
  user: Consultant = JSON.parse(localStorage.getItem('user_data'));


  constructor(private modalService: NgbModal, private globalService: GlobalService,
    private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService) {
      this.globalService.limitFiveDatingConsultant(this.user.id).subscribe(
        result => {
          this.datings = result;
          console.log(this.datings)
        }
      )
     }

  ngOnInit() {
  }

  to(to:string): void {
    GLOBAL.redirectTo('/'+to);
  }

}
