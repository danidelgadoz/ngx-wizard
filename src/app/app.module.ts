import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardService } from './wizard/wizard.service';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  providers: [WizardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
