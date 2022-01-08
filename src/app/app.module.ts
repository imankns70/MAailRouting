import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './credit-card/tooltip.directive';
import { OneComponent } from './change-detection/one/one.component';
import { TwoComponent } from './change-detection/two/two.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { AuthFormComponent } from './projection/auth-form/auth-form.component';
import { AuthRememberComponent } from './projection/auth-remember/auth-remember.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectionComponent } from './projection/projection.component';
import { AuthMessageComponent } from './projection/auth-message/auth-message.componet';
import { MailModule } from './mail/mail.module';
import { RouterModule, Routes, PreloadingStrategy, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';


export class CustomePreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : of(null)
  }
}

export const ROUTES: Routes = [
  {
    path: 'dashboard', canLoad: [AuthGuard], data: { preload: true },
    loadChildren: () => import('./dashboard/dashboard.module').then(r => r.DashboardModule)
  },
  // {
  //   path: 'mail',
  //   loadChildren: () => import('./mail/mail.module').then(r => r.MailModule)
  // },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    CreditCardComponent,
    CreditCardDirective,
    TooltipDirective,
    ChangeDetectionComponent,
    OneComponent, TwoComponent,
    ProjectionComponent, AuthFormComponent, AuthRememberComponent, AuthMessageComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MailModule,
    AuthModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomePreload })
  ],
  providers: [CustomePreload],
  bootstrap: [AppComponent]
})
export class AppModule { }
