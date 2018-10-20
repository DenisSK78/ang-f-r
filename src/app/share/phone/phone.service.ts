import {Injectable} from '@angular/core';
import {Phone} from './phone.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Person} from '../person/person.model';

@Injectable()
export class PhoneService {

  constructor(private http: HttpClient) {
  }

  deletePhone(id: number): Observable<Person> {
    return this.http.delete<Person>(`${environment.apiUrl}/phone/delete/${id}`);
  }

  savePhone(phone: Phone): Observable<Phone> {
    return this.http.post<Phone>( `/phone`, phone);
  }

}
