import { Component, OnInit } from '@angular/core';
import {PersonService} from '../share/person/person.service';
import {Person} from '../share/person/person.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public personList = [];

  constructor(private service: PersonService, private router: Router) { }

  ngOnInit() {
    this.service.getPersonList()
      .subscribe(data => this.personList = data);
  }

  onDetail(person: Person) {
    this.router.navigate(['person', 'detail', person.id]);
  }
}
