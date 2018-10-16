import { Component, OnInit } from '@angular/core';
import {Person} from '../share/person/person.model';
import {PersonService} from '../share/person/person.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  public person: Person;

  constructor(private personService: PersonService, private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    let id: number;
    id = +this.currentRoute.snapshot.paramMap.get('id');
    this.person = this.personService.getById(id)
      .subscribe(data => this.person = data);
  }

}
