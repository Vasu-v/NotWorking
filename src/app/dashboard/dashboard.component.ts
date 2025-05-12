import { Component } from '@angular/core';
// import { AuthService } from '../services/auth.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    }
  };
  barChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      { data: [65, 59, 80, 81], label: 'Sales' }
    ]
  };

  pieChartData = {
    labels: ['Chrome', 'Firefox', 'Safari'],
    datasets: [
      { data: [55, 25, 20], backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'] }
    ]
  };

  lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        data: [33, 53, 85, 41],
        label: 'Visitors',
        borderColor: '#3e95cd',
        fill: false
      }
    ]
  };

}
