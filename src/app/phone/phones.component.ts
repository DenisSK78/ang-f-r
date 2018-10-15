import { Component, OnInit } from '@angular/core';
import {PhoneService} from '../share/phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  public phones = [];

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.phoneService.getPhohes()
      .subscribe(data => this.phones = data);
  }

}
