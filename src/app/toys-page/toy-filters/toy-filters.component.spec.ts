import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyFiltersComponent } from './toy-filters.component';

describe('ToyFiltersComponent', () => {
  let component: ToyFiltersComponent;
  let fixture: ComponentFixture<ToyFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
