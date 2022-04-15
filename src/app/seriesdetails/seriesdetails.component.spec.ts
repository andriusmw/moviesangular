import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesdetailsComponent } from './seriesdetails.component';

describe('SeriesdetailsComponent', () => {
  let component: SeriesdetailsComponent;
  let fixture: ComponentFixture<SeriesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
