import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageshipperComponent } from './pageshipper.component';

describe('PageshipperComponent', () => {
  let component: PageshipperComponent;
  let fixture: ComponentFixture<PageshipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageshipperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageshipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
