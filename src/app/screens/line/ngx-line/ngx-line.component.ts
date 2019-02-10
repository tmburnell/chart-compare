import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-ngx-line',
  templateUrl: './ngx-line.component.html',
  styleUrls:   ['./ngx-line.component.scss']
})
export class NgxLineComponent implements OnInit {
  data;

  constructor() {
  }

  ngOnInit() {
    this.data = [{
      name:   'Instance 1',
      series: [
        {name: '2019-01-15T09:00:00.000Z', value: 30 },
        {name: '2019-01-15T10:00:00.000Z', value: 25 },
        {name: '2019-01-15T11:00:00.000Z', value: 40 },
        {name: '2019-01-15T12:00:00.000Z', value: 35 },
        {name: '2019-01-15T13:00:00.000Z', value: 20 },
        {name: '2019-01-15T14:00:00.000Z', value: 30 },
        {name: '2019-01-15T15:00:00.000Z', value: 30 },
        {name: '2019-01-15T16:00:00.000Z', value: 35 },
        {name: '2019-01-15T17:00:00.000Z', value: 32 },
        {name: '2019-01-15T18:00:00.000Z', value: 36 },
        {name: '2019-01-15T19:00:00.000Z', value: 40 },
        {name: '2019-01-15T20:00:00.000Z', value: 35 },
        {name: '2019-01-15T21:00:00.000Z', value: 30 },
        {name: '2019-01-15T22:00:00.000Z', value: 25 },
        {name: '2019-01-15T23:00:00.000Z', value: 30 }
      ]
    }];
  }

}
