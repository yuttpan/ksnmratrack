import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


/*
  Generated class for the SearchAnProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SearchAnProvider {
   url: string = 'http://118.175.76.244/mra_api';
  constructor(public http: Http) {
    console.log('Hello SearchAnProvider Provider');
  }
/*  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/users`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }
*/
  getAn(){
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/searchan.php`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }
}
