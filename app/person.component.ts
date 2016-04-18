import {Component, OnInit} from 'angular2/core';
import {PersonService} from './person.service';
import {Configuration} from './configuration'
import {CORE_DIRECTIVES} from 'angular2/common';
import {Person} from './person.interface';

@Component({
    selector: 'person',
    templateUrl: 'app/person.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [PersonService, Configuration]
})

export class PersonComponent implements OnInit {
    public person: Person;
    // public name = JSON.stringify(this.person.name);
    // public count: number;
    public errorMessage: string;

    constructor(private _http: PersonService) { }

    ngOnInit() {
        // this.getOnePerson();
    }

    // private getOnePerson() {
    //     this._http.getOnePerson()
    //         .subscribe(
    //         data => (this.person = data),
    //         error => this.errorMessage = <any>error,
    //         () => console.log("Finished retrieving one person.")
    //         );
    // }
}