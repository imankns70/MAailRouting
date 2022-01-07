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
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
export const ROUTES: Routes = [
  { path: '**', redirectTo: 'folder/inbox' }
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
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
