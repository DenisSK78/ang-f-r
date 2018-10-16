import { Component, OnInit } from '@angular/core';
import {PersonService} from '../share/person/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public personList = [];

  constructor(private service: PersonService) { }

  ngOnInit() {
    this.service.getPersonList()
      .subscribe(data => this.personList = data);
  }

}
