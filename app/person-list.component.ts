import {Component, OnInit} from 'angular2/core';
import {PersonService} from './person.service';
import {Configuration} from './configuration'
import {CORE_DIRECTIVES} from 'angular2/common';
import {Person} from './person.interface';
import {PersonDetailComponent} from './person-detail.component';

@Component({
    selector: 'person-list',
    templateUrl: 'app/person-list.component.html',
    directives: [CORE_DIRECTIVES, PersonDetailComponent],
    providers: [PersonService, Configuration]
})

export class PersonListComponent implements OnInit {
    public persons: Person[];
    public count: number;
    public errorMessage: string;

    constructor(private _http: PersonService) { }

    ngOnInit() {
        this.getAllPeople();
    }

    private getAllPeople() {
        this._http.getAllPeople()
            .subscribe(
            data => {this.persons = data
                    this.count = (data).length
            },
            error => this.errorMessage = <any>error,
            () => console.log("Finished retrieving persons.")
            );
    }
}