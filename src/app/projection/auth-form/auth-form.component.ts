import { Component, Output, EventEmitter, ContentChild, AfterContentInit, ViewChild, AfterViewInit, AfterViewChecked, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.componet';
import { User } from '../projection.component';

@Component({
  selector: 'auth-form',
  styles: [` 
  .email {
    border-color:#9f72e6
  } 
  `],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
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
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  @ViewChild(AuthMessageComponent) messageComponent: AuthMessageComponent;
  @ViewChild('email') email: ElementRef;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef,
    private rendere: Renderer2) { }
  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterViewInit(): void {
    // this.email.nativeElement.setAttribute('placeholder', 'enter email address');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();
    this.rendere.setAttribute(this.email.nativeElement, 'placeholder', 'enter2 email address');
    this.rendere.setProperty(this.email.nativeElement, 'class', 'email')

  }
  ngAfterContentInit(): void {
    if (this.messageComponent) {
      this.messageComponent.days = 80;
    }
    this.cd.detectChanges()

    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {

        this.showMessage = checked;
      })

    }

  }

}