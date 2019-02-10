import { Component, OnInit } from '@angular/core';
import { ChartType, ConfigService, ngxData } from 'src/app/services/config.service';

@Component({
  selector:    'app-ngx-line',
  templateUrl: './ngx-line.component.html',
  styleUrls:   ['./ngx-line.component.scss']
})
export class NgxLineComponent implements OnInit {
  data: ngxData;

  constructor(public configService: ConfigService) {
  }

  ngOnInit() {
    this.data = <ngxData> this.configService.getData(ChartType.ngx);
  }

}
