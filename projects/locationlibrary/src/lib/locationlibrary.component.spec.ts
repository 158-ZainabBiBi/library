import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationlibraryComponent } from './locationlibrary.component';

describe('LocationlibraryComponent', () => {
  let component: LocationlibraryComponent;
  let fixture: ComponentFixture<LocationlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationlibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
