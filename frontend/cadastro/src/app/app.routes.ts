import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BemComponent } from './bem/bem.component';
import { BaixaComponent } from './baixa/baixa.component';
import { ListaBensComponent } from './lista-bens/lista-bens.component';


export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'bem', component: BemComponent},
  {path: 'baixa', component: BaixaComponent},
  {path: 'lista-bens', component: ListaBensComponent},
  {path: '**', component: LoginComponent}
];
