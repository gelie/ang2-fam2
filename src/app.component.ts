import {Component} from 'angular2/core';
import {TreeView} from './tree-view';
// import {PersonListComponent} from './person-list.component';
// import {PersonComponent} from './person.component';
// import {AlertDemo} from './alert.component';

@Component({
    selector: 'my-app',
    template: '<tree-view></tree-view>',
    directives: [TreeView]
    // template: '<person-list></person-list>',
    // directives: [PersonListComponent]
})
export class AppComponent { }
