import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MAailRouting';

  items = [
    { name: "iman", age: 34, location: "ahvaz" },
    { name: "reza", age: 30, location: "tehran" },
    { name: "farhan", age: 25, location: "shiraz" }
  ]
}
