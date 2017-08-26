import { Injectable } from '@angular/core';
import { Http ,Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Item } from "../../model/anSearch";

/*
  Generated class for the SearchAnProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SearchAnProvider {
  apiUrl:string = 'http://118.175.76.244/mra_api';
  constructor(public http: Http) {
    console.log('Hello SearchAnProvider Provider');
  }

}
