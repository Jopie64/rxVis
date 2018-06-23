import { Component, OnInit, Input } from '@angular/core';
import { from, Observable, concat } from 'rxjs';
import { map, shareReplay, takeUntil, takeWhile, repeat, concatMap, share, distinctUntilChanged, delay } from 'rxjs/operators';
import EZ from 'eases';
import { duration, ease } from '../tools';

@Component({
  selector: 'app-ease-shower',
  templateUrl: './ease-shower.component.html',
  styleUrls: ['./ease-shower.component.css']
})
export class EaseShowerComponent implements OnInit {

  @Input() func: (n: number) => number;
  @Input() name: string;

  circleSize$: Observable<number>;

  constructor() {
  }

  ngOnInit() {
    this.circleSize$ = concat(
      duration(2000).pipe(map(this.func)),
      from([1]).pipe(delay(2000))
    ).pipe(
      repeat(),
      map(i => i * 70 + 10)
    );
  }
}
