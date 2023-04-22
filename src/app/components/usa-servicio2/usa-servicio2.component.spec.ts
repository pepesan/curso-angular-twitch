import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaServicio2Component } from './usa-servicio2.component';

describe('UsaServicio2Component', () => {
  let component: UsaServicio2Component;
  let fixture: ComponentFixture<UsaServicio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaServicio2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsaServicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
