import { ComponentFixture, TestBed } from '@angular/core/testing';

import { France } from './france';

describe('France', () => {
  let component: France;
  let fixture: ComponentFixture<France>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [France],
    }).compileComponents();

    fixture = TestBed.createComponent(France);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
