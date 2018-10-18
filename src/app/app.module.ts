import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonesComponent } from './phone/phones.component';
import { PhoneService} from './share/phone/phone.service';
import { HttpClientModule} from '@angular/common/http';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService} from './share/person/person.service';
import { EmailService} from './share/email/email.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
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
  providers: [PhoneService, PersonService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
