import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Person} from './person.model';
import {map} from 'rxjs/operators';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) {}

  public personList: Person[];

  getPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>(environment.apiUrl);
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(environment.apiUrl + '/' + id);
  }
}
