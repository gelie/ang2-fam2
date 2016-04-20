import {Component, OnInit, Input} from 'angular2/core';
import {PersonService} from './person.service';
import {Configuration} from './configuration'
import {CORE_DIRECTIVES} from 'angular2/common';
import {Person} from './person.interface';

@Component({
    selector: 'children',
    templateUrl: 'src/templates/children.component.html',
    directives: [CORE_DIRECTIVES]
})

export class ChildrenComponent implements OnInit {
    public children: Person[];
    public errorMessage: String;
    @Input() url: string;

    constructor(private _http: PersonService) { }

    ngOnInit() {
        // console.log('myurl = ' + this.url);
        this.getChildren(this.url);
        // this.getChildren("https://localhost:5000/family/api/v3.0/persons/1/children");
    };

    private getChildren(url) {
        this._http.getChildren(url)
            .subscribe(
            data => this.children = data,
            error => this.errorMessage = <any>error,
            () => console.log("Finished retrieving children.")
            );
    };
}