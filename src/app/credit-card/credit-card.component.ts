import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @Input()
  items: any[]
  constructor() { }

  ngOnInit() {
  }

}
