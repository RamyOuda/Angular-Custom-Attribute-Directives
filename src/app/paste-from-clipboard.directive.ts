import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPasteFromClipboard]',
})
export class PasteFromClipboardDirective {
  constructor(private element: ElementRef) {}

  @Input('appPasteFromClipboard') color: string;

  hasPasted = false;

  @HostListener('window:keydown', ['$event'])
  onKeyDown($event: KeyboardEvent) {
    if (($event.ctrlKey || $event.metaKey) && $event.key === 'v') {
      this.hasPasted = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp() {
    if (this.hasPasted) {
      this.element.nativeElement.value = this.color;
      this.element.nativeElement.style.backgroundColor = this.color;
      this.hasPasted = false;
    }
  }
}
