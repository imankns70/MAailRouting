import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
  <div>
    <h1>Dashboard</h1>
  </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
