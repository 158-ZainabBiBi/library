import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationleveltypeComponent } from './locationleveltype.component';

describe('LocationleveltypeComponent', () => {
  let component: LocationleveltypeComponent;
  let fixture: ComponentFixture<LocationleveltypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationleveltypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationleveltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
