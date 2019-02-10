import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highchart-line',
  templateUrl: './highchart-line.component.html',
  styleUrls: ['./highchart-line.component.scss']
})
export class HighchartLineComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
    series: [
      {
        data: [
          ['2019-01-15T09:00:00.000Z', 30],
          ['2019-01-15T10:00:00.000Z', 25],
          ['2019-01-15T11:00:00.000Z', 40],
          ['2019-01-15T12:00:00.000Z', 35],
          ['2019-01-15T13:00:00.000Z', 20],
          ['2019-01-15T14:00:00.000Z', 30],
          ['2019-01-15T15:00:00.000Z', 30],
          ['2019-01-15T16:00:00.000Z', 35],
          ['2019-01-15T17:00:00.000Z', 32],
          ['2019-01-15T18:00:00.000Z', 36],
          ['2019-01-15T19:00:00.000Z', 40],
          ['2019-01-15T20:00:00.000Z', 35],
          ['2019-01-15T21:00:00.000Z', 30],
          ['2019-01-15T22:00:00.000Z', 25],
          ['2019-01-15T23:00:00.000Z', 30]
        ]
      }]
  };

  constructor() { }

  ngOnInit() {
  }

}
