import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyBoxComponent } from './toy-box.component';

describe('ToyBoxComponent', () => {
  let component: ToyBoxComponent;
  let fixture: ComponentFixture<ToyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
