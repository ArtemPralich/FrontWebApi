import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShipperComponent } from './pageshipper.component';

describe('PageshipperComponent', () => {
  let component: PageShipperComponent;
  let fixture: ComponentFixture<PageShipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShipperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
