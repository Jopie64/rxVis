import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EaseShowerComponent } from './ease-shower.component';
import { describe, it, expect, beforeEach } from 'vitest';

describe('EaseShowerComponent', () => {
  let component: EaseShowerComponent;
  let fixture: ComponentFixture<EaseShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EaseShowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaseShowerComponent);
    component = fixture.componentInstance;
    component.func = (n: number) => n;
    component.name = 'linear';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
