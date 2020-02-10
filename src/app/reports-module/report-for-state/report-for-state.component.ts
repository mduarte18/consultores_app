import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit, NgModuleFactoryLoader } from '@angular/core';
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
  selector: 'app-report-for-state',
  templateUrl: './report-for-state.component.html',
  styleUrls: ['./report-for-state.component.css']
})
export class ReportForStateComponent implements OnInit {

  data: any[];
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

  constructor(private globalServide: GlobalService, private loader: Ng4LoadingSpinnerService) {
    alert('Para imprimir el reporte usar el atajo del navegador "CTRL+P".');
    this.loader.show();
    this.globalServide.reporteDatingForState().subscribe(
      result => {
        this.data = result;
        console.log(this.data);
        for (let item of this.data) {
          this.options.series[0].data.push({ y: item.counter, name: `Estado: ${item.state}` });
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
