import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from 'src/app/services/global.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  public consultant: Consultant = JSON.parse(localStorage.getItem('user_data'));

  account : any={};

  accounts: any[];

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private modal: NgbModal, private toaster: ToastrService) { }

  ngOnInit() {
  }

  close(){
    this.modal.dismissAll()
  }

  open(content){
    this.modal.open(content);
  }

  create_account(){
    console.log(this.account);
  }

}
