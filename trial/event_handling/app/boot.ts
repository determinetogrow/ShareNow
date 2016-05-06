import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {NavService} from '../services/NavService';

bootstrap(AppComponent, [NavService]);