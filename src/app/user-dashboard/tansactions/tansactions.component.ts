import { User } from './../../interfaces/User';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder  }  from '@angular/forms';



@Component({
  selector: 'app-tansactions',
  templateUrl: './tansactions.component.html',
  styleUrls: ['./tansactions.component.css']
})
export class TansactionsComponent implements OnInit {

  uploadForm: FormGroup;
  user : User = JSON.parse(localStorage.getItem('user_data'));
  balanceUser : string="0";

  constructor(private modalService : NgbModal,private formBuilder: FormBuilder, private globalService: GlobalService) {
    this.globalService.getBalanceUser(this.user.id).subscribe(
      result=>{this.balanceUser=result},
      error=>console.log(error)
    );
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      amount:[''],
      deposit: ['']
    });
  }

  open(content) {
    console.log(content);
    this.modalService.open(content);
  }
  sendDeposit(){
    console.log('enviado');
    this.modalService.dismissAll();
  }

   close() {
    // console.log(content);
    this.modalService.dismissAll();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    console.log(formData);

    this.globalService.uploadDeposit(formData).subscribe(
      result => console.log(result),
      error => console.log(error)
    )
  }

}
