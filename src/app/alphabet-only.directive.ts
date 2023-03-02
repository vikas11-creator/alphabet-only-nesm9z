import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlphabetOnly]',
})
export class AlphabetOnlyDirective {
  key;
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    console.log(this.key);
    if (
      (this.key >= 15 && this.key <= 64) ||
      this.key >= 123 ||
      (this.key >= 96 && this.key <= 105)
    ) {
      event.preventDefault();
    }
  }
}

//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
// check this for key code
// A - Z === 65 - 90
// 0 - 1 - 9 === 48 - 49 - 57
