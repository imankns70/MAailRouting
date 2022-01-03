import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './credit-card/tooltip.directive';
import { OneComponent } from './change-detection/one/one.component';
import { TwoComponent } from './change-detection/two/two.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

@NgModule({
  declarations: [	
    AppComponent,
      CreditCardComponent,
      CreditCardComponent,
      CreditCardDirective,
      TooltipDirective,
      ChangeDetectionComponent,
      OneComponent,TwoComponent

   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
