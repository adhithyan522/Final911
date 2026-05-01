import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cars } from './cars';
import { provideRouter } from '@angular/router';

describe('Cars', () => {
  let component: Cars;
  let fixture: ComponentFixture<Cars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cars],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Cars);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have resetFilters method', () => {
    expect(component.resetFilters).toBeDefined();
  });
});