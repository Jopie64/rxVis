import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxDrawerComponent } from './rx-drawer.component';

describe('RxDrawerComponent', () => {
  let component: RxDrawerComponent;
  let fixture: ComponentFixture<RxDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
