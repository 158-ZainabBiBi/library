import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsearchfilterComponent } from './locationsearchfilter.component';

describe('LocationsearchfilterComponent', () => {
  let component: LocationsearchfilterComponent;
  let fixture: ComponentFixture<LocationsearchfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsearchfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsearchfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
