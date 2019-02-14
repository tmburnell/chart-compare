import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  layout: {
    direction: boolean
  };

  constructor(public configService: ConfigService) { }

  ngOnInit() {
    this.layout = this.configService.getLayout();
  }

}
