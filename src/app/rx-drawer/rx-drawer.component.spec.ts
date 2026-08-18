import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RxDrawerComponent } from './rx-drawer.component';
import { demoNodeTypes } from '../rxConfigs';
import { describe, it, expect, beforeEach } from 'vitest';

describe('RxDrawerComponent', () => {
  let component: RxDrawerComponent;
  let fixture: ComponentFixture<RxDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RxDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxDrawerComponent);
    component = fixture.componentInstance;
    component.config = demoNodeTypes;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
