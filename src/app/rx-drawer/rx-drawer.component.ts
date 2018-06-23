import { Component, OnInit } from '@angular/core';
import { interval, range, animationFrameScheduler, defer } from 'rxjs';
import { map, shareReplay, takeUntil, takeWhile } from 'rxjs/operators';
import { elasticOut } from 'eases';


export const msElapsed = (scheduler = animationFrameScheduler) =>
  defer(() => {
    const start = scheduler.now();
    return interval(0, scheduler).pipe(
      map(_ => scheduler.now() - start));
  });

export const duration = (durMs: number, scheduler = animationFrameScheduler) =>
  msElapsed(scheduler).pipe(
    map(v => v / durMs),
    takeWhile(v => v <= 1)
  );

export const ease = f =>
  map(f as (n: number) => number);

@Component({
  selector: 'app-rx-drawer',
  templateUrl: './rx-drawer.component.html',
  styleUrls: ['./rx-drawer.component.css']
})
export class RxDrawerComponent implements OnInit {

  frame$ = msElapsed().pipe(shareReplay(1));

  circleSize$ = duration(2000).pipe(
    ease(elasticOut),
    map(i => i * 70)
  );

  constructor() {
  }

  ngOnInit() {
  }

}
