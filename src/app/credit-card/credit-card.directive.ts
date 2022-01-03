import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  @HostBinding('style.border')
  border: string;

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
     
    const input = event.target as HTMLInputElement;

    //remove white space from the string
    let trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length > 16) {
      trimmed = trimmed.substring(0, 16);

    }
    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      const curretnPart = trimmed.substring(i)
      numbers.push(curretnPart.substring(0, 4))
    }
    input.value = numbers.join(' ');
 
    this.border = '';

    // check the string is not number 
    if (/[^\d]/.test(trimmed)) {
     return this.border = '1px solid red';
    }
  }

}
