import { Routes } from '@angular/router';
import { Cars } from './cars/cars';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Cardetails } from './cardetails/cardetails';
export const routes: Routes = [
    {path:'', component: Home},
    {path:'cars/car-details/:id', component: Cardetails},
    {path:'cars', component: Cars},
    {path:'contact', component: Contact},
];