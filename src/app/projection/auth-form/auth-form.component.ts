import { Component, Output, EventEmitter, ContentChild, AfterContentInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.componet';
import { User } from '../projection.component';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
    <!-- <div *ngIf="showMessage">
      you will be logged in for 30 days
    </div> -->
    <auth-message [style.display]="(showMessage ? 'inherit':'none')"></auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit,AfterViewChecked {

  showMessage: boolean;
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  @ViewChild(AuthMessageComponent) messageComponent: AuthMessageComponent;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
  ngAfterViewChecked(): void {
  
  }
  ngAfterViewInit(): void {
   
  }
  ngAfterContentInit(): void {
    if (this.messageComponent) {
      this.messageComponent.days = 80;
    }
    
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
      
        this.showMessage = checked;
      })

    }

  }

}