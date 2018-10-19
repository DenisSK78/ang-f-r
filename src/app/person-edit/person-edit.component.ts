import { Component, OnInit } from '@angular/core';
import {PersonService} from '../share/person/person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../share/person/person.model';
import {Email} from '../share/email/email.model';
import {Phone} from '../share/phone/phone.model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  public emails: Email[];
  public phones: Phone[];
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

  onGoToBack() {
    this.router.navigate(['person', 'detail', this.person.id]);
  }

  onEdit(person) {
    this.personService.updatePerson(person).subscribe(data => person = data);
    this.router.navigateByUrl('person/detail/' + this.person.id);
  }

  onDeleteEmail(index: number) {
    console.log('del: ' +  index);
    this.emails.splice(index, 1);
  }

  onDeletePhone(index: number) {
    console.log('del: ' + index );
    this.phones.splice(index, 1);
  }
}
