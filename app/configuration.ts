import {Injectable} from 'angular2/core';

@Injectable()

export class Configuration{
  public ServerApi: string = 'https://localhost:5000/family/api/v3.0';
}
