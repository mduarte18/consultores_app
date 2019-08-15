import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit, NgModuleFactoryLoader } from '@angular/core';

@Component({
  selector: 'app-report-for-state',
  templateUrl: './report-for-state.component.html',
  styleUrls: ['./report-for-state.component.css']
})
export class ReportForStateComponent implements OnInit {

  data: any[];

  constructor(private globalServide: GlobalService, private loader: Ng4LoadingSpinnerService) {
    alert('Para imprimir el reporte usar el atajo del navegador "CTRL+P".');
    this.loader.show();
    this.globalServide.reporteDatingForState().subscribe(
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
