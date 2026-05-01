import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from './card';
import { provideRouter } from '@angular/router';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    component.cars = {
      id: 1,
      name: 'Test Car',
      image: '',
      year: 2024,
      price: '10,00,000',
      fuel_type: 'Petrol',
      transmission: 'Manual',
      description: 'Test description'
    };

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});