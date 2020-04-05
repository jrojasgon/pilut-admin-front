import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompetitionService} from '../../shared/services/competition.service';
import {Search} from '../../../../shared/model/search';
import * as Chartist from 'chartist';
import {ChartType, ChartEvent} from 'ng-chartist';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

declare var require: any;
const data: any = require('./data/data.json');

@Component({
  selector: 'app-competition-chart',
  templateUrl: './competition-chart.component.html',
  styleUrls: ['./competition-chart.component.scss']
})
export class CompetitionChartComponent implements OnInit, AfterViewInit {

  searchForm: FormGroup;
  competitionDateSearch = new Search();

  widgetLineChart: Chart = {
    type: 'Line', data: data.widgetLineChart,
    options: {
      axisX: {
        showGrid: true,
        showLabel: false,
        offset: 0,
      },
      axisY: {
        showGrid: false,
        low: 40,
        showLabel: false,
        offset: 0,
      },
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      fullWidth: true,
    },
  };

  // Donut chart configuration Starts
  donutChart1: Chart = {
    type: 'Pie',
    data: data.dashboardDonut,
    options: {
      donut: true,
      donutWidth: 3,
      startAngle: 0,
      chartPadding: 25,
      labelInterpolationFnc: function(value) {
        return '\ue991';
      }
    },
    events: {
      draw(data: any): void {
        if (data.type === 'label') {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
              class: 'ct-label',
              'font-family': 'feather'
            });
          } else {
            data.element.remove();
          }
        }
      }
    }
  };
  // Donut chart configuration Ends

  // Donut chart configuration Starts
  donutChart2: Chart = {
    type: 'Pie',
    data: data.dashboardDonut,
    options: {
      donut: true,
      donutWidth: 3,
      startAngle: 90,
      chartPadding: 25,
      labelInterpolationFnc: function(value) {
        return '\ue97a';
      }
    },
    events: {
      draw(data: any): void {
        if (data.type === 'label') {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
              class: 'ct-label',
              'font-family': 'feather'
            });
          } else {
            data.element.remove();
          }
        }
      }
    }
  };
  // Donut chart configuration Ends

  // Donut chart configuration Starts
  donutChart3: Chart = {
    type: 'Pie',
    data: data.dashboardDonut,
    options: {
      donut: true,
      donutWidth: 3,
      startAngle: 270,
      chartPadding: 25,
      labelInterpolationFnc: function(value) {
        return '\ue97b';
      }
    },
    events: {
      draw(data: any): void {
        if (data.type === 'label') {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
              class: 'ct-label',
              'font-family': 'feather'
            });
          } else {
            data.element.remove();
          }
        }
      }
    }
  };

  // Donut chart configuration Starts
  donutChart4: Chart = {
    type: 'Pie',
    data: data.dashboardDonut,
    options: {
      donut: true,
      donutWidth: 3,
      startAngle: 270,
      chartPadding: 25,
      labelInterpolationFnc: function(value) {
        return '\ue974';
      }
    },
    events: {
      draw(data: any): void {
        if (data.type === 'label') {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
              class: 'ct-label',
              'font-family': 'feather'
            });
          } else {
            data.element.remove();
          }
        }
      }
    }
  };

  // barChart
  barChartOptions = data.barChartOptions;
  barChartLabels = data.barChartLabels;
  barChartType = data.barChartType;
  barChartLegend = data.barChartLegend;
  barChartData = data.barChartData;
  barChartColors = data.barChartColors;

  // lineChart
  lineChartData = lineChartData;
  lineChartLabels = lineChartLabels;
  lineChartOptions = lineChartOptions;
  lineChartColors = lineChartColors;
  lineChartLegend = lineChartLegend;
  lineChartType = lineChartType;

  // radar
  radarChartLabels = data.radarChartLabels;
  radarChartData = data.radarChartData;
  radarChartType = data.radarChartType;
  radarChartColors = data.radarChartColors;
  radarChartOptions = data.radarChartOptions;

  constructor(private formBuilder: FormBuilder, private competitionService: CompetitionService) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]]
    });


  }

  onChanges() {
  }

  ngAfterViewInit(): void {
    this.onChanges();
  }


}

export let lineChartData: Array<any> = [

  {
    data: [834, 974, 794, 864, 1154, 964, 434, 484, 444, 384, 364, 354, 654, 514, 724, 964, 934, 1014, 864, 884, 1334],
    label: 'Recaudo $MM'
  },
  {
    data: [242, 302, 480, 460, 400, 202, 282, 287, 289, 261, 420, 440, 357, 129, 159, 251, 234, 380, 380, 203, 180],
    label: 'Costos'
  },
  {
    data: [592, 672, 314, 404, 754, 762, 152, 197, 155, 123, 56, 86, 297, 386, 565, 713, 701, 634, 484, 681, 1154],
    label: 'Utilidad'
  }

];
export let lineChartLabels: Array<any> = ['Jul-18', 'Ago-18', 'Sept-18', 'Oct-18', 'Nov-18', 'Dic-18', 'Ene-19', 'Feb-19',
  'Mar-19', 'Abr-19', 'May-19', 'Jun-19', 'Juk-19', 'Ago-19', 'Sept-19', 'Oct-19', 'Nov-19', 'Dic-19', 'Ene-20', 'Feb-20',
  'Mar-20'];
export let lineChartOptions: any = {
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
    mode: 'label'
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'bottom',
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: '#f3f3f3',
        drawTicks: false,
      },
      scaleLabel: {
        display: true,
        labelString: 'Mes'
      }
    }],
    yAxes: [{
      display: true,
      gridLines: {
        color: '#f3f3f3',
        drawTicks: false,
      },
      scaleLabel: {
        display: true,
        labelString: 'Valor en millones $',
      }
    }]
  },
  title: {
    display: true,
    text: ''
  }
};
export let lineChartColors: Array<any> = [

  {

    fill: false,
    borderDash: [5, 5],
    borderColor: '#9C27B0',
    pointBorderColor: '#9C27B0',
    pointBackgroundColor: '#FFF',
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  },
  {

    fill: false,
    borderDash: [5, 5],
    borderColor: '#00A5A8',
    pointBorderColor: '#00A5A8',
    pointBackgroundColor: '#FFF',
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: '#FF7D4D',
    pointBorderColor: '#FF7D4D',
    pointBackgroundColor: '#FFF',
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  },

];
export let lineChartLegend = true;
export let lineChartType = 'line';
