import { Component, OnInit } from '@angular/core';
import {PersonService} from '../share/person/person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../share/person/person.model';
import {Email} from '../share/email/email.model';
import {Phone} from '../share/phone/phone.model';
import {PhoneService} from '../share/phone/phone.service';
import {EmailService} from '../share/email/email.service';


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
              private router: Router,
              private phoneService: PhoneService,
              private emailService: EmailService) { }

  ngOnInit() {
    let id: number;
    id = +this.currentRoute.snapshot.paramMap.get('id');
    this.personService.getById(id)
      .subscribe(data => this.updAll(data));
  }

  onGoToBack() {
    this.router.navigate(['person', 'detail', this.person.id]);
  }

  onEdit(person) {
    this.personService.updatePerson(person)
      .subscribe(data => this.updAll(data));
    this.router.navigateByUrl('person/detail/' + this.person.id);
  }

  onDeleteEmail(index: number) {
    this.emailService.deleteEmail(this.person.emails[index].id)
      .subscribe(data => this.updAll(data));
  }

  onDeletePhone(index: number) {
    this.phoneService.deletePhone(this.person.phones[index].id)
      .subscribe(data => this.updAll(data));
  }

  updAll(data) {
    this.person = data;
    this.emails = this.person.emails;
    this.phones = this.person.phones;
  }

  addNewPhone() {
    this.person.phones.push(new Phone());
  }

  addNewEmail() {
    this.person.emails.push(new Email());
  }

  onDeletePerson() {
    this.personService.deletePerson(this.person.id)
      .subscribe(() => this.router.navigateByUrl('person-list'));
  }
}
