import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingHomeComponent } from './adming-home.component';

describe('AdmingHomeComponent', () => {
  let component: AdmingHomeComponent;
  let fixture: ComponentFixture<AdmingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
