import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './container/dashboard/dashboard.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: []
})
export class DashboardModule { }
