import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardService } from './wizard/wizard.service';

import { Step1Component } from './pages/step1/step1.component';
import { Step2Component } from './pages/step2/step2.component';
import { Step3Component } from './pages/step3/step3.component';
import { Step4Component } from './pages/step4/step4.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WizardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
