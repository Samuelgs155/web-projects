import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTable } from './number-table';

describe('NumberTable', () => {
  let component: NumberTable;
  let fixture: ComponentFixture<NumberTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberTable],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
