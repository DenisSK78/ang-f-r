import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Person} from './person.model';
import {Observable} from 'rxjs';
import {PersonService} from './person.service';
import {Injectable} from '@angular/core';

@Injectable()
export class PersonResolver implements Resolve<Person> {

  constructor(private personService: PersonService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Person> | Promise<Person> | Person |
    Observable<Person> {

    return this.personService.getById(route.params['/person/detail/1']);
  }

}
