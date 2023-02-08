import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CopyToClipboardDirective } from './copy-to-clipboard.directive';
import { PasteFromClipboardDirective } from './paste-from-clipboard.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CopyToClipboardDirective,
    PasteFromClipboardDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
