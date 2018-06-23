import { Component, OnInit } from '@angular/core';
import { interval, range, animationFrameScheduler } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-rx-drawer',
  templateUrl: './rx-drawer.component.html',
  styleUrls: ['./rx-drawer.component.css']
})
export class RxDrawerComponent implements OnInit {

  frame$ = range(0, Number.POSITIVE_INFINITY, animationFrameScheduler).pipe(
    map(_ => animationFrameScheduler.now()),
    shareReplay(1)
  );

  circleSize$ = this.frame$.pipe(
    map(i => i % 20 + 50)
  );

  constructor() {
  }

  ngOnInit() {
  }

}
