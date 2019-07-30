import { GlobalService } from './../../services/global.service';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  consultant: Consultant = JSON.parse(localStorage.getItem('user_data'));
  rePass: string;

  constructor(private globalService:GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService) { }

  ngOnInit() {
  }

  updateProfile() {
    this.loader.show();
    console.log(this.consultant);
    this.globalService.updateConsultantProfile(this.consultant).subscribe(
      result => {
        console.log(result);
        localStorage.setItem('user_data', JSON.stringify(this.consultant));
        console.log(JSON.parse(localStorage.getItem('user_data')))
        this.loader.hide();
        this.toaster.success('Perfil Actualizado');
      },
      error => {
        console.log(error)
        this.toaster.error(error.message, 'Error:');

      }
    );
  }


}
