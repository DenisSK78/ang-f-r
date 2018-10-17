import { Component, OnInit } from '@angular/core';
import {PersonService} from '../share/person/person.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  public name: string;
  public emails = [];
  public phones = [];
  public id: number;
  public address: string;
  public comment: string;

  constructor(private personService: PersonService, private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    let id: number;
    id = +this.currentRoute.snapshot.paramMap.get('id');
    this.personService.getById(id).subscribe(data => {
      this.id = data.id;
      this.name = data.name;
      this.phones = data.phones;
      this.emails = data.emails;
      this.address = data.address;
      this.comment = data.comment;
    });
  }

}
