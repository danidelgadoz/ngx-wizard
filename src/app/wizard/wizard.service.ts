import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  private subject = new Subject<any>();
  public step: number;

  constructor() { }

  sendStep(_step: number) {
    this.step = _step;
    this.subject.next(_step);
  }

  getStep(): Observable<number> {
    return this.subject.asObservable();
  }

  getCurrentStep(): number {
    return this.step;
  }
}
