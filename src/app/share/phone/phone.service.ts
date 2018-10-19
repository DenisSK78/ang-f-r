import {Injectable} from '@angular/core';
import {Phone} from './phone.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class PhoneService {

  constructor(private http: HttpClient) {}

  deletePhone(id: number): Observable<Phone> {
    return this.http.delete<Phone>(`${environment.apiUrl}/phone/${id}`);
  }

  savePhone(phone: Phone): Observable<Phone> {
    return this.http.post<Phone>( `${environment.apiUrl}/phone`, phone);
  }

}
