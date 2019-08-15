import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-for-careers',
  templateUrl: './report-for-careers.component.html',
  styleUrls: ['./report-for-careers.component.css']
})
export class ReportForCareersComponent implements OnInit {

  data: any[];

  constructor(private globalServide: GlobalService, private loader: Ng4LoadingSpinnerService) {
    alert('Para imprimir el reporte usar el atajo del navegador "CTRL+P".');
    this.loader.show();
    this.globalServide.reporteDatingForCareers().subscribe(
      result => {
        this.data = result;
        console.log(this.data);
        this.loader.hide()
      },
      error => { console.error(error); this.loader.hide() }
    );
  }


  ngOnInit() {
  }

}
