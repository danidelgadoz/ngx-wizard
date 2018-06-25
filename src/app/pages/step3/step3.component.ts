import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../wizard/wizard.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
    // send a step(number) to subscribers via observable subject
    this.wizardService.sendStep(2);
  }

}
