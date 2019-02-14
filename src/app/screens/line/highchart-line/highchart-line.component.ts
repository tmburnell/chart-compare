import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartType, ConfigService, highChartData } from 'src/app/services/config.service';

@Component({
  selector: 'app-highchart-line',
  templateUrl: './highchart-line.component.html',
  styleUrls: ['./highchart-line.component.scss']
})
export class HighchartLineComponent implements OnInit {
  highcharts = Highcharts;
  highchartOptions: Highcharts.Options;

  constructor(public configService: ConfigService) { }

  ngOnInit() {
    this.highchartOptions = {
      chart: {
        renderTo: 'container',
        type: 'line'
      //  "area"|"areaspline"|"bar"|"column"|"line"|"pie"|"scatter"|"spline"
      },
      xAxis: {type: 'category'},
      series : <any> this.configService.getData(ChartType.highchart)
    };
  }

}
