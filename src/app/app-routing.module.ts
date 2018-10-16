import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhonesComponent} from './phone/phones.component';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'person-list'},
  {path: 'person/detail/:id', component: PersonDetailComponent},
  {path: 'phones', component: PhonesComponent},
  {path: 'person-list', component: PersonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
