import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, shareReplay, takeUntil, takeWhile, repeat, concatMap, share, distinctUntilChanged } from 'rxjs/operators';
import EZ from 'eases';
import { duration, ease } from '../tools';

@Component({
  selector: 'app-rx-drawer',
  templateUrl: './rx-drawer.component.html',
  styleUrls: ['./rx-drawer.component.css']
})
export class RxDrawerComponent implements OnInit {

  easing$ = from(Object.keys(EZ).map(v => ({name: v, f: EZ[v]}))).pipe(
    concatMap(v => duration(2000).pipe(
      ease(v.f),
      map(ep => ({name: v.name, ep}))
    )),
    repeat(),
    share()
  );

  circleSize$ = this.easing$.pipe(
    map(v => v.ep),
    map(i => i * 150 + 50)
  );

  easeName$ = this.easing$.pipe(
    map(v => v.name),
    distinctUntilChanged()
  );

  constructor() {
  }

  ngOnInit() {
  }
}
