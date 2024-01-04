import { Routes } from '@angular/router';
import { UserListComponent } from './home/user-list/user-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
  path:'user',
  loadComponent:()=>HomeComponent
},
{
  path:'user-list',
  loadComponent:()=>UserListComponent
}
];
