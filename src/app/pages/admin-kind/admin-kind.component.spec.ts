import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKindComponent } from './admin-kind.component';

describe('AdminKindComponent', () => {
  let component: AdminKindComponent;
  let fixture: ComponentFixture<AdminKindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
