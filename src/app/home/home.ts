import { Component } from '@angular/core';
import { Corousel } from "../corousel/corousel";
import { Accordion } from "../accordion/accordion";
import { Cars } from '../cars/cars';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Corousel, Accordion, Cars],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
