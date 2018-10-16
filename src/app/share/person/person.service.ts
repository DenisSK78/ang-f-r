import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Person} from './person.model';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) {}

  getPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>(environment.apiUrl);
  }
}
