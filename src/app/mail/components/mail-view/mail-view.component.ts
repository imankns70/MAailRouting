import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `

      <div class="mail-view">
        <ng-container *ngIf="(message$ | async) as message"; else noMeesage>
            <h2>{{ message.from }}</h2>
            <p>{{message.full }}</p>            
        </ng-container>
    <ng-template #noMeesage>
      <p>not message avaliable</p>
    </ng-template>
    </div>
    <div class="mail-reply">
      <textarea
        (change)="updateReply($event.target.value)"
        placeholder="Type your reply..."
        [value]="reply">
      </textarea>
      <button type="button" (click)="sendReply()">
        Send
      </button>
    </div>
  `
})
export class MailViewComponent {
  message$: Observable<Mail> = this.route.data.pipe(pluck('message'));

  reply = '';
  hasUnsavedChanges = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.reply = '';
      this.hasUnsavedChanges = false;
    });
  }

  updateReply(value: string) {
    this.reply = value;
    this.hasUnsavedChanges = true;
  }

  sendReply() {
    

  }
}