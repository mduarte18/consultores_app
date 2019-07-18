import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tansactions',
  templateUrl: './tansactions.component.html',
  styleUrls: ['./tansactions.component.css']
})
export class TansactionsComponent implements OnInit {

  constructor(private modalService : NgbModal) {
  }

  ngOnInit() {
  }

  open(content) {
    console.log(content);
    this.modalService.open(content);
  }
  sendDeposit(){
    console.log('enviado');
    this.modalService.dismissAll();
  }

}
