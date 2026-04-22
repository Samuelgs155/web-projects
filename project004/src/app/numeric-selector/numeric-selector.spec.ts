import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericSelector } from './numeric-selector';

describe('NumericSelector', () => {
  let component: NumericSelector;
  let fixture: ComponentFixture<NumericSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumericSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(NumericSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
