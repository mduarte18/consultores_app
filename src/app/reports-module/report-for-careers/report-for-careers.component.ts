import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-report-for-careers',
  templateUrl: './report-for-careers.component.html',
  styleUrls: ['./report-for-careers.component.css']
})
export class ReportForCareersComponent implements OnInit {

  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: (9 / 16 * 100) + '%' // 16:9 ratio
    },
    title: {
      text: 'Graficas'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: []
    }]
  };

  data: any[];


  constructor(private globalServide: GlobalService, private loader: Ng4LoadingSpinnerService) {
    alert('Para imprimir el reporte usar el atajo del navegador "CTRL+P".');
    this.loader.show();
    this.globalServide.reporteDatingForCareers().subscribe(
      result => {
        this.data = result;
        console.log(this.data);
        console.log(this.options);
        for (let item of this.data) {
          this.options.series[0].data.push({ y: item.counter, name: `${item.career} Fecha: ${item.mes}-${item.anio}` });
        }
        Highcharts.chart('container', this.options);

        this.loader.hide();
      },
      error => { console.error(error); this.loader.hide() }
    );
  }


  ngOnInit() {
  }

}
