import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Competition} from '../../shared/model/competition';

declare var require: any;
const data: any = require('./data/data.json');

// options bar chart
export let barChartShowXAxis = true;
export let barChartShowYAxis = true;
export let barChartGradient = false;
export let barChartShowLegend = false;
export let barChartShowXAxisLabel = true;
export let barChartXAxisLabel = 'Cantidad';
export let barChartShowYAxisLabel = true;
export let barChartYAxisLabel = 'Estado';
export let barChartColorScheme = {
  domain: ['#FF8D60', '#FF586B', '#1CBCD8', '#AAAAAA']
};

export let barChartMulti = [
  {
    name: 'Con pago',
    series: [
      {
        name: '',
        value: 67
      }
    ]
  },

  {
    name: 'Errados',
    series: [
      {
        name: '',
        value: 12
      }
    ]
  },

  {
    name: 'Terceros',
    series: [
      {
        name: '',
        value: 98
      }
    ]
  },
  {
    name: 'Con acuerdo',
    series: [
      {
        name: '',
        value: 219
      }
    ]
  },
  {
    name: 'Contactados',
    series: [
      {
        name: '',
        value: 330
      }
    ]
  },
  {
    name: 'Gestionados',
    series: [
      {
        name: '',
        value: 689
      }
    ]
  },
  {
    name: 'Total competencia',
    series: [
      {
        name: '',
        value: 1415
      }
    ]
  }
];

export let pieChartSingle = [
  {
    name: 'Ejecutado',
    value: 80
  },
  {
    name: 'En proceso',
    value: 20
  }
];

@Component({
  selector: 'app-competition-indicators',
  templateUrl: './competition-indicators.component.html',
  styleUrls: ['./competition-indicators.component.css']
})
export class CompetitionIndicatorsComponent implements OnInit {

  @Input() competition: Competition;
  data = data;
  pieChartSingle = pieChartSingle;

  // options
  barChartShowYAxis = barChartShowYAxis;
  barChartShowXAxis = barChartShowXAxis;
  barChartGradient = barChartGradient;
  barChartShowLegend = barChartShowLegend;
  barChartShowXAxisLabel = barChartShowXAxisLabel;
  barChartXAxisLabel = barChartXAxisLabel;
  barChartShowYAxisLabel = barChartShowYAxisLabel;
  barChartYAxisLabel = barChartYAxisLabel;
  barChartColorScheme = barChartColorScheme;
  barChartMulti = barChartMulti;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
