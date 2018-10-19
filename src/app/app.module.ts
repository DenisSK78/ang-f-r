import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneService} from './share/phone/phone.service';
import { HttpClientModule} from '@angular/common/http';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService} from './share/person/person.service';
import { EmailService} from './share/email/email.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import {FormsModule} from '@angular/forms';
import {PersonResolver} from './share/person/person.rsolver';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonEditComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonService, EmailService, PersonResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
