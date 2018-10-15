import { Injectable } from '@angular/core';
import {Phone} from './phone.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PhoneService {

  private _url: string = '/assets/phone.json';
  // private _url: string = 'http://localhost:8080/address-book/phones';

  constructor(private http: HttpClient) {}

  getPhohes(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this._url);
  }

}
