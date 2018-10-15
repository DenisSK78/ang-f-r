import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhonesComponent} from './phone/phones.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'phones'},
  {path: 'phones', component: PhonesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
