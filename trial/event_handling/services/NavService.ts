import {EventEmitter} from 'angular2/core';

export class NavService {
  navchange: EventEmitter<number> = new EventEmitter();
  constructor() {}
  emitNavChangeEvent(number) {
    this.navchange.emit(number);
  }
  getNavChangeEmitter() {
    return this.navchange;
  }
}