import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyGridComponent } from './toy-grid.component';

describe('ToyGridComponent', () => {
  let component: ToyGridComponent;
  let fixture: ComponentFixture<ToyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
