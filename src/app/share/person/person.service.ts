import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Person} from './person.model';
import {RequestMethod, RequestOptions} from '@angular/http';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) {}

  public personList: Person[];

  getPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>(environment.apiUrl);
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${environment.apiUrl}/person/${id}`);
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${environment.apiUrl}/person/update`, person);
  }

  deletePerson(person: Person): Observable<Person> {
    return this.http.delete<Person>(`${environment.apiUrl}/person/delete/` + person.id);
  }

  savePerson(person: Person): Observable<Person> {
    return this.http.post<Person>( `${environment.apiUrl}/person/save`, person);
  }
}
