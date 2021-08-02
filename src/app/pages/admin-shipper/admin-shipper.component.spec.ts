import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShipperComponent } from './admin-shipper.component';

describe('AdminShipperComponent', () => {
  let component: AdminShipperComponent;
  let fixture: ComponentFixture<AdminShipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShipperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
