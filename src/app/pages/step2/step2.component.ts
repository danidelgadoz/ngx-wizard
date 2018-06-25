import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../wizard/wizard.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
    // send a step(number) to subscribers via observable subject
    this.wizardService.sendStep(1);
  }

}
