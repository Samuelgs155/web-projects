import { ComponentFixture, TestBed } from '@angular/core/testing';

import { America } from './america';

describe('America', () => {
  let component: America;
  let fixture: ComponentFixture<America>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [America],
    }).compileComponents();

    fixture = TestBed.createComponent(America);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
