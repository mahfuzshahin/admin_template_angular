import { Routes } from '@angular/router';
import {CategoryComponent} from "./category/category.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BasicFormComponent} from "./basic-form/basic-form.component";
import {BasicTableComponent} from "./basic-table/basic-table.component";

export const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'basic-table', component: BasicTableComponent },
  { path: '', component: LoginComponent }
];
