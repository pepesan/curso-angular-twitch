import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PactometroSubscribeComponent } from './pactometro-subscribe.component';

describe('PactometroSubscribeComponent', () => {
  let component: PactometroSubscribeComponent;
  let fixture: ComponentFixture<PactometroSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PactometroSubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PactometroSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
