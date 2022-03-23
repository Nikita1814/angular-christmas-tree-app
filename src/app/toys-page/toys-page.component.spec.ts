import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysPageComponent } from './toys-page.component';

describe('ToysPageComponent', () => {
  let component: ToysPageComponent;
  let fixture: ComponentFixture<ToysPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToysPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
