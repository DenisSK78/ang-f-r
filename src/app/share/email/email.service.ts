import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Email} from './email.model';
import {Person} from '../person/person.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {}

  deleteEmail(id: number): Observable<Person> {
    return this.http.delete<Person>(`${environment.apiUrl}/email/delete/${id}`);
  }

  saveEmail(email: Email): Observable<Email> {
    return this.http.post<Email>( `/email/update`, email);
  }
}
