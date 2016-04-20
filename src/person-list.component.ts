import {Component, OnInit} from 'angular2/core';
import {PersonService} from './person.service';
import {Configuration} from './configuration'
import {CORE_DIRECTIVES} from 'angular2/common';
import {Person} from './person.interface';
import {ChildrenComponent} from './children.component';

@Component({
    selector: 'person-list',
    templateUrl: 'src/templates/person-list.component.html',
    directives: [CORE_DIRECTIVES, ChildrenComponent],
    providers: [PersonService, Configuration]
})

export class PersonListComponent implements OnInit {
    // public children: Person[];
    // public count: number;
    public errorMessage: string;
    public root: string;
    public rootChildrenUrl: string;
    
    constructor(private _http: PersonService) { }

    ngOnInit() {
        this.getRoot();
        // this.getChildren(this.rootChildrenUrl);
    }
    
    private getRoot() {
      this._http.getRoot()
        .subscribe(
          data => {this.root = data.firstname,
            this.rootChildrenUrl = data.children
          },
          error => this.errorMessage = <any>error,
          () => console.log("Finished retrieving root.")
        );      
    }
    
    // private getChildren(url) {
    //     this._http.getChildren("https://localhost:5000/family/api/v3.0/persons/19/children")
    //         .subscribe(
    //         data => {this.children = data},
    //         error => this.errorMessage = <any>error,
    //         () => console.log("Finished retrieving children.")
    //         );
    // }

    // private getAllPeople() {
    //     this._http.getAllPeople()
    //         .subscribe(
    //         data => {this.persons = data
    //                 this.count = (data).length
    //         },
    //         error => this.errorMessage = <any>error,
    //         () => console.log("Finished retrieving persons.")
    //         );
    // }
    
    // this.children = this.getChildren(this.rootChildrenUrl);
}