import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  @Input() steps: Array<any>;
  @Input() active: number;

  constructor() { }

  ngOnInit() {
  }

}
