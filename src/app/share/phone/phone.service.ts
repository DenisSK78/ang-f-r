import {Injectable} from '@angular/core';
import {Phone} from './phone.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class PhoneService {

  constructor(private http: HttpClient) {}

  getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(environment.apiUrl + '/phones');
  }

}
