import { GLOBAL } from 'src/app/global/GLOBAL';
import { User } from './../../interfaces/User';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from './../../services/global.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datings: any[];
  user: User = JSON.parse(localStorage.getItem('user_data'));


  constructor(private modalService: NgbModal, private globalService: GlobalService,
    private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService) {
    this.globalService.limitFiveDatingUser(this.user.id).subscribe(
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
