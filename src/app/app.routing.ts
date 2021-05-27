import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthorizatedGuard} from "./core/guards/authorizated.guard";
import { RegisterComponent } from './register/register.component';
import { FormAdoptComponent } from '../app/form-adopt/form-adopt.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ AuthorizatedGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'form-adopt', component: FormAdoptComponent},
  { path: 'form-adopt/:id', component: FormAdoptComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

export const Routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
