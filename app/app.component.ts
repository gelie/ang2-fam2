import {Component} from 'angular2/core';
import {PersonComponent} from './person.component';
import {AlertDemo} from './alert.component';

@Component({
    selector: 'my-app',
    template: `
      <person></person>
      <alert-demo></alert-demo>
    `,
    directives: [PersonComponent, AlertDemo]
})
export class AppComponent { }
