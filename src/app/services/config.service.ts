import { Injectable } from '@angular/core';
import { SeriesPieDataOptions } from 'highcharts';

export enum ChartType {
  ngx       = 'ngx',
  highchart = 'highchart'
}

export type ngxData = Array<{ name: string; "series": Array<{ name: string, value: number }> }>;
export type highChartData = Array<{ name: string; "data": Array<(number | [string, number])> }>;

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  series = [
    {
      "name":   "Montserrat",
      "series": [
        {
          "value": 5745,
          "name":  "2016-09-23T11:54:26.721Z"
        },
        {
          "value": 5477,
          "name":  "2016-09-16T23:38:47.897Z"
        },
        {
          "value": 6579,
          "name":  "2016-09-22T14:54:26.858Z"
        },
        {
          "value": 2354,
          "name":  "2016-09-15T10:57:53.970Z"
        },
        {
          "value": 4115,
          "name":  "2016-09-14T00:47:15.351Z"
        }
      ]
    },
    {
      "name":   "Pakistan",
      "series": [
        {
          "value": 4773,
          "name":  "2016-09-23T11:54:26.721Z"
        },
        {
          "value": 5709,
          "name":  "2016-09-16T23:38:47.897Z"
        },
        {
          "value": 2898,
          "name":  "2016-09-22T14:54:26.858Z"
        },
        {
          "value": 6019,
          "name":  "2016-09-15T10:57:53.970Z"
        },
        {
          "value": 4691,
          "name":  "2016-09-14T00:47:15.351Z"
        }
      ]
    },
    {
      "name":   "Botswana",
      "series": [
        {
          "value": 4536,
          "name":  "2016-09-23T11:54:26.721Z"
        },
        {
          "value": 5948,
          "name":  "2016-09-16T23:38:47.897Z"
        },
        {
          "value": 3656,
          "name":  "2016-09-22T14:54:26.858Z"
        },
        {
          "value": 2494,
          "name":  "2016-09-15T10:57:53.970Z"
        },
        {
          "value": 3874,
          "name":  "2016-09-14T00:47:15.351Z"
        }
      ]
    },
    {
      "name":   "Western Sahara",
      "series": [
        {
          "value": 6710,
          "name":  "2016-09-23T11:54:26.721Z"
        },
        {
          "value": 5626,
          "name":  "2016-09-16T23:38:47.897Z"
        },
        {
          "value": 5231,
          "name":  "2016-09-22T14:54:26.858Z"
        },
        {
          "value": 3009,
          "name":  "2016-09-15T10:57:53.970Z"
        },
        {
          "value": 2251,
          "name":  "2016-09-14T00:47:15.351Z"
        }
      ]
    },
    {
      "name":   "American Samoa",
      "series": [
        {
          "value": 6725,
          "name":  "2016-09-23T11:54:26.721Z"
        },
        {
          "value": 5056,
          "name":  "2016-09-16T23:38:47.897Z"
        },
        {
          "value": 6097,
          "name":  "2016-09-22T14:54:26.858Z"
        },
        {
          "value": 4077,
          "name":  "2016-09-15T10:57:53.970Z"
        },
        {
          "value": 6684,
          "name":  "2016-09-14T00:47:15.351Z"
        }
      ]
    }
  ];


  layout: {
    direction: boolean
  } = {direction: false};

  constructor() {
  }

  getData(type?: ChartType): ngxData | highChartData {
    if (type === ChartType.ngx) {
      return <ngxData>this.series;
    } else if (type === ChartType.highchart) {
      return <highChartData> this.series.map(rec => {
        return {
          name: rec.name,
          data: rec.series.map(data => {
            return [data.name, data.value];
          })
        };
      });
    } else {
      return this.series;
    }
  }

  getLayout() {
    return this.layout;
  }
}
