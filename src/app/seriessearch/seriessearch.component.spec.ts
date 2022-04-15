import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriessearchComponent } from './seriessearch.component';

describe('SeriessearchComponent', () => {
  let component: SeriessearchComponent;
  let fixture: ComponentFixture<SeriessearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriessearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriessearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
