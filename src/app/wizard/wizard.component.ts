import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { WizardService } from './wizard.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, OnDestroy {
  @Input() steps: Array<any>;
  @Input() active: number;
  subscription: Subscription;

  constructor(private wizardService: WizardService) {
    // subscribe to wizard component step
    this.subscription = this.wizardService.getStep().subscribe(index => {
      this.active = index;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
