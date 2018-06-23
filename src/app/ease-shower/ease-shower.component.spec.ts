import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaseShowerComponent } from './ease-shower.component';

describe('EaseShowerComponent', () => {
  let component: EaseShowerComponent;
  let fixture: ComponentFixture<EaseShowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaseShowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaseShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
