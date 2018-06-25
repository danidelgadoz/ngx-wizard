import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../wizard/wizard.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
    // send a step(number) to subscribers via observable subject
    this.wizardService.sendStep(0);
  }

}
