import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Configuration} from './configuration';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class PersonService {
    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerApi;
        this.headers = new Headers();
        // this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    
    public getRoot() {
      return this._http.get(this.actionUrl + '/tree', this.headers)
      .map(res => res.json())
      .catch(error => this.handleError(error));
    }
    
    public getChildren(url) {
        return this._http.get(url, this.headers)
        .map(res => res.json())
        .catch(error => this.handleError(error));
    }
    
    public getAllPeople() {
        return this._http.get(this.actionUrl + '/persons', this.headers)
        .map(res => res.json())
        .catch(error => this.handleError(error));
    }
    
    // public getOnePerson() {
    //     return this._http.get(this.actionUrl+'/persons/2', this.headers)
    //     .map(res => res.json())
    //     .catch(error => this.handleError(error));
    // }
    
    private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}