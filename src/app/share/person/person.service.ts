import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Person} from './person.model';
import {catchError, map, tap} from 'rxjs/operators';
import {$} from 'protractor';
import {RequestOptions} from '@angular/http';

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

  updatePerson(person: Person) {
    const headers = new HttpHeaders().append( 'Content-Type', 'application/json');
    const body = JSON.stringify(person);
    this.http.put(environment.apiUrl + '/update', body, { headers: headers })
      .toPromise();

  }




// .subscribe(
//     success => alert("Done"),
//   error => alert(error)
// );
}
