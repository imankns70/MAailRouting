import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'example-two',
  changeDetection: ChangeDetectionStrategy.Default,
  styles: [`
    .example-two {
      font-size: 19px;
      margin-bottom: 10px;
    }
  `],
  template: `
    <h3>example-two</h3>
    <div class="example-two">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
      
      <button (click)="update()">Internal update</button>
      <p>* should update</p>
    </div>
  `
})
export class TwoComponent {
  @Input()
  user;

  update() {
    this.user.name = 'Scott Raynor';
  }
}