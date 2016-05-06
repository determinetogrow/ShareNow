import {Component} from 'angular2/core';
import {NavService} from '../services/NavService';

@Component({
  selector: 'obs-comp',
  template: `obs component, item: {{item}}`
})
export class ObservingComponent {
  item: number = 0;
  subscription: any;
  constructor(private navService:NavService) {}
  ngOnInit() {
    this.subscription = this.navService.getNavChangeEmitter()
      .subscribe(item => this.selectedNavItem(item));
  }
  selectedNavItem(item: number) {
    this.item = item;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

@Component({
  selector: 'my-nav',
  template:`
    <div class="nav-item" (click)="selectedNavItem(1)">nav 1 (click me)</div>
    <div class="nav-item" (click)="selectedNavItem(2)">nav 2 (click me)</div>
  `,
})
export class Navigation {
  item = 1;
  constructor(private navService:NavService) {}
  selectedNavItem(item: number) {
    console.log('selected nav item ' + item);
    this.navService.emitNavChangeEvent(item);
  }
}

@Component({
  selector: 'my-app',
  template: `{{title}}
  <p>
  <my-nav></my-nav>
  <button (click)="showObsComp = !showObsComp">toggle ObservingComponent</button>
  <div *ngIf='showObsComp'>
    <obs-comp></obs-comp>
  </div>
  `,
  directives: [Navigation, ObservingComponent]
})
export class AppComponent {
  title = "Angular 2 - event delegation";
  showObsComp = true;
  constructor() { console.clear(); }
}
