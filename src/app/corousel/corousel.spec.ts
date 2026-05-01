import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corousel } from './corousel';

describe('Corousel', () => {
  let component: Corousel;
  let fixture: ComponentFixture<Corousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corousel],
    }).compileComponents();

    fixture = TestBed.createComponent(Corousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
