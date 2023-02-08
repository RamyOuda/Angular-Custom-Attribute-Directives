import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('bottomText') bottomElement: ElementRef;

  color = '';

  reset() {
    this.bottomElement.nativeElement.value = '';
    this.bottomElement.nativeElement.style.backgroundColor = '';
  }
}
