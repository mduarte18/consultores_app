import { Parameter } from './../../interfaces/Parameter';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  parameters:Parameter[];

  constructor(private globalService:GlobalService) {
    console.log('Home iniciado');
    this.globalService.allParameters({}).subscribe(
      result=>{
        this.parameters=result;
        localStorage.setItem('app_parameters',JSON.stringify(this.parameters));
        // console.log(localStorage);
      }
    );
   }

  ngOnInit() {
  }

}
