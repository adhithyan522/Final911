import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cars',
  imports: [Card, CommonModule],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars implements OnInit {
  cars: any[] = [];

  constructor(
    private apiservice: Apiservice,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.apiservice.getproducts().subscribe((data: any) => {
      this.cars = data;
      this.cdr.detectChanges();
    });
  }

  resetFilters(): void {
    this.apiservice.getproducts().subscribe((data: any) => {
      this.cars = data;
      this.cdr.detectChanges();
    });
  }
}