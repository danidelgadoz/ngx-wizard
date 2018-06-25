import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../wizard/wizard.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
    // send a step(number) to subscribers via observable subject
    this.wizardService.sendStep(3);
  }


}
