import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {HeaderComponent} from './header/header.component'
import {HomeComponent} from './home/home.component'
import {EventsComponent} from './events/events.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
