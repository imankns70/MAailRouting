import { Component,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'change-detection',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
   <div>
      <button (click)="addProp()">Add property</button>
      <button (click)="changeUser()">Change user object</button>
      <button (click)="changeName()">Change name property</button>
      <div class="users">
          
        <example-one [user]="user"></example-one>
        <example-two [user]="user"></example-two>
      </div>
    </div>
  
  `,
 
})
export class ChangeDetectionComponent  {

  
    user: any = {
        name: 'Mark Hoppus',
        age: 44,
        location: 'California'
      };
    
      addProp() {
        this.user.email = 'blink@blink-182.net';
      }
    
      changeName() {
        this.user.name = 'Travis Barker';
      }
    
      changeUser() {
        this.user = {
          name: 'Tom Delonge',
          age: 41,
          location: 'California'
        };
      }

 
}
