import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {Guide1Component} from './guide/guide1/guide1.component';
import {Guide2Component} from './guide/guide2/guide2.component';
import {Guide3Component} from './guide/guide3/guide3.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'guide-1', component: Guide1Component},
  {path: 'guide-2', component: Guide2Component},
  {path: 'guide-3', component: Guide3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
