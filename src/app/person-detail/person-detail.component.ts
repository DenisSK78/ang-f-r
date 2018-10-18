import { Component, OnInit } from '@angular/core';
import {PersonService} from '../share/person/person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../share/person/person.model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  public emails = [];
  public phones = [];
  public person: Person;

  constructor(private personService: PersonService,
              private currentRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id: number;
    id = +this.currentRoute.snapshot.paramMap.get('id');
    this.personService.getById(id).subscribe(data => {
      this.person = data;
      this.emails = this.person.emails;
      this.phones = this.person.phones;
    });
  }

  onGoToEdit() {
    this.router.navigate(['person', 'edit', this.person.id]);
  }

  onGoToBack() {
    this.router.navigate(['person-list']);
  }

}
