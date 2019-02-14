import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  layout: {
    direction: boolean
  };
  data: any;

  constructor( public configService: ConfigService,
               public router: Router) {

  }

  ngOnInit(): void {
    this.layout = this.configService.getLayout();
    this.data = this.configService.getData()
  }
}
