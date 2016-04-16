import {Component} from 'angular2/core';
import {PersonListComponent} from './person-list.component';
// import {PersonComponent} from './person.component';
// import {AlertDemo} from './alert.component';

@Component({
    selector: 'my-app',
    template: '<person-list></person-list>',
    directives: [PersonListComponent]
})
export class AppComponent { }
