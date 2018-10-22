import { Component, OnInit } from '@angular/core';
import {PersonService} from '../share/person/person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Phone} from '../share/phone/phone.model';
import {Person} from '../share/person/person.model';
import {Email} from '../share/email/email.model';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.css']
})
export class PersonNewComponent implements OnInit {

  public emails: Email[];
  public phones: Phone[];
  public person: Person;

  constructor(private personService: PersonService,
              private currentRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.person = new Person();
    this.person.name = '';
    this.person.comment = '';
    this.person.address = '';
    this.person.phones = [];
    this.person.emails = [];
  }

  onGoToBack() {
    this.router.navigate(['person-list']);
  }

  onSave(person) {
    this.person = person;
    console.log(person);
    this.personService.savePerson(this.person)
      .subscribe(data => {
        this.updAll(data);
        console.log(this.person);
        this.router.navigateByUrl('person-list');
      });
  }

  onDeleteEmail(index: number) {
    this.person.emails.splice(index, 1);
  }

  onDeletePhone(index: number) {
    this.person.phones.splice(index, 1);
  }

  updAll(data) {
    this.person = data;
    this.emails = this.person.emails;
    this.phones = this.person.phones;
  }

  addNewPhone() {
    this.person.phones.push(new Phone());
    this.phones = this.person.phones;
    console.log('Add phone');
  }

  addNewEmail() {
    this.person.emails.push(new Email());
    this.emails = this.person.emails;
    console.log('Add email');
  }
}
