import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Dating } from './../../interfaces/Dating';
import { Consultant } from './../../interfaces/Consultant';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public user: Consultant = JSON.parse(localStorage.getItem('user_data'));

  public datings : Dating[];

  public tempDating = {} as Dating;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal:NgbModal) {

      this.loader.show();
      globalService.getDatingsForConsultant(this.user.id).subscribe(
      result => {
        this.datings=result;
        this.loader.hide();
        console.log(this.datings);
      },
      error => {
        console.log(error);
        this.loader.hide();
                }
                );
}

ngOnInit() {
}


open(content,event) {
  this.tempDating.user_id=event.srcElement.dataset.userid;
  this.tempDating.consultant_id=this.user.id;
  this.tempDating.title=event.srcElement.dataset.title;
  this.tempDating.summary=event.srcElement.dataset.summary;

  console.log(this.tempDating);

  this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    console.log(result);
  }, (reason) => {
    console.log(reason);

  });

}

close(){
  this.modal.dismissAll();
  this.tempDating= {} as Dating;
}

}
