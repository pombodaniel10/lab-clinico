import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {DashboardComponent} from './dashboard/dashboard.component';
import {DatabaseComponent} from './database/database.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'database', component: DatabaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
