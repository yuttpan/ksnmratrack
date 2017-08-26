import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { FeedBack } from "../../model/feedback";

@Injectable()
export class AuthServiceProvider {
  apiUrl:string = 'http://118.175.76.244/mra_api';
  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
  public signin(username:string,password:string):Observable<FeedBack> {
    let myHeader = new Headers();
    myHeader.append('Content-Type','application/json');

    let body = {
      'username': username,
      'password': password 
    }
    return this.http.post(`${this.apiUrl}/login.php`, body, myHeader)
    .map((res:Response) => <FeedBack> res.json())
    .catch(this.handleError);
  }

  private handleError(error:any) {
    return Observable.throw(error.json().description || 'เกิดข้อผิดพลาดจาก Server');
  }
}
