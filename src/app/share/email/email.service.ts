import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Email} from './email.model';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {}

  deleteEmail(id: number): Observable<Email> {
    return this.http.delete<Email>(`${environment.apiUrl}/phone/${id}`);
  }

  saveEmail(email: Email): Observable<Email> {
    return this.http.post<Email>( `${environment.apiUrl}/phone`, email);
  }
}
