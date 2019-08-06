import { User } from './../../interfaces/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public user: User = JSON.parse(localStorage.getItem('user_data'));
  datings$: any;

  constructor(private globalService:GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
     this.getDatings(this.user.id);
    }

  ngOnInit() {
  }

  getDatings(id):void{
    this.loader.show();
    this.globalService.getDatingsByUser(id).subscribe(
      result=>{
        console.log(result);
        this.datings$=result;
        this.loader.hide();
      },
      error=>{
        console.log(error);
        this.loader.hide();
        this.toaster.error(error.message,'Error:');
      }
    );
  }

}
