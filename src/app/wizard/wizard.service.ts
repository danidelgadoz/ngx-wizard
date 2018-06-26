import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  private subject = new Subject<any>();
  public step: number;

  constructor() { }

  sendStep(_index: number) {
    this.step = _index;
    this.subject.next(_index);
  }

  getStep(): Observable<number> {
    return this.subject.asObservable();
  }

  getCurrentStep(): number {
    return this.step;
  }
}
