import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]',
})
export class CopyToClipboardDirective {
  constructor(private element: ElementRef) {}

  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    if (($event.ctrlKey || $event.metaKey) && $event.key === 'c') {
      this.element.nativeElement.style.fontStyle = 'italic';
    } else {
      this.element.nativeElement.style.fontStyle = 'normal';
    }
  }
}
