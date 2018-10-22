import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {FormsModule} from '@angular/forms';
import {PersonResolver} from './share/person/person.rsolver';
import {PersonNewComponent} from './person-new/person-new.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'person-list'},
  {path: 'person/detail/:id', component: PersonDetailComponent, resolve: PersonResolver},
  {path: 'person-list', component: PersonListComponent},
  {path: 'person/edit/:id', component: PersonEditComponent, resolve: PersonResolver},
  {path: 'person/new', component: PersonNewComponent, resolve: PersonResolver}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
