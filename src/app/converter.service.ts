import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  integerEvent: Subject<void> = new Subject<void>();
  textEvent: Subject<void> = new Subject<void>();
  clearintegerEvent: Subject<void> = new Subject<void>();
  cleartextEvent: Subject<void> = new Subject<void>();
  constructor() { }

  emitEventToInteger(value: any) {
    this.integerEvent.next(value);
  }
  emitEventToText(value: any) {
    this.textEvent.next(value);
  }
  clearintegerValue(value: any) {
    this.clearintegerEvent.next(value);
  }
  cleartextValue(value: any) {
    this.cleartextEvent.next(value);
  }
}
