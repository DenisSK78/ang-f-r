import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhonesComponent} from './phone/phones.component';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'person-list'},
  {path: 'person/detail/:id', component: PersonDetailComponent},
  {path: 'phones', component: PhonesComponent},
  {path: 'person-list', component: PersonListComponent},
  {path: 'person/edit/:id', component: PersonEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
