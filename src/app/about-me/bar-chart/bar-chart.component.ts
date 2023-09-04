import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { chartFront1, chartFront2, chartFront3, chartBack } from './colors';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  chart: any;
  delayed: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    const deviceWidth = document.documentElement.clientWidth;
    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: [
          'Angular',
          'TypeScript',
          'Sass/CSS',
          'JavaScript',
          'HTML',
          'MySQL',
          'Git',
          'Flutter',
          'AWS',
          'Node.js',
          'Photoshop',
          'Illustrator',
          'Figma',
          'Adobe XD',
          'Japanese',
          'English',
        ],
        datasets: [
          {
            data: [
              85, 80, 70, 75, 70, 50, 75, 65, 75, 55, 70, 40, 80, 55, 85, 75,
            ],
            backgroundColor: [
              chartFront1,
              chartFront1,
              chartFront1,
              chartFront1,
              chartFront1,
              chartFront1,
              chartFront1,
              chartFront1,
              chartFront1,
              chartFront1,
              chartFront2,
              chartFront2,
              chartFront2,
              chartFront2,
              chartFront3,
              chartFront3,
            ],
          },
          {
            data: [
              15, 20, 30, 25, 30, 50, 25, 35, 25, 45, 30, 60, 20, 45, 15, 25,
            ],
            backgroundColor: chartBack,
          },
        ],
      },
      options: {
        aspectRatio: deviceWidth < 576 ? 0.8 : 1.4,
        animation: {
          onComplete: () => {
            this.delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === 'data' &&
              context.mode === 'default' &&
              !this.delayed
            ) {
              delay = context.dataIndex * 180 + context.datasetIndex * 30;
            }
            return delay;
          },
        },
        indexAxis: 'y',
        scales: {
          x: {
            display: false,
            stacked: true,
            beginAtZero: true,
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: deviceWidth < 576 ? 14 : 16,
                family: 'IBM Plex Mono Light',
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            // Disable tooltip when datasetIndex === 1
            filter: function (tooltipItem) {
              return tooltipItem.datasetIndex === 0;
            },
          },
        },
      },
    });
  }
}
