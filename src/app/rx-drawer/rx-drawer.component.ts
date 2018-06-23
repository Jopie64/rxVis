import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, concatMap, repeat, share, distinctUntilChanged } from 'rxjs/operators';
import EZ from 'eases';
import { duration, ease } from '../tools';


interface IPos {
  x: number;
  y: number;
}
interface IGenerator {
  pos: IPos;
  name: string;
}

@Component({
  selector: 'app-rx-drawer',
  templateUrl: './rx-drawer.component.html',
  styleUrls: ['./rx-drawer.component.css']
})
export class RxDrawerComponent implements OnInit {

/*  easing$ = from(Object.keys(EZ).map(v => ({name: v, f: EZ[v]}))).pipe(
    concatMap(v => duration(2000).pipe(
      ease(v.f),
      map(ep => ({name: v.name, ep}))
    )),
    repeat(),
    share()
  );
*/
  easing$ = from([{name: 'Nothing', ep: 1}]);

  circleSize$ = this.easing$.pipe(
    map(v => v.ep),
    map(i => i * 150 + 50)
  );

  easeName$ = this.easing$.pipe(
    map(v => v.name),
    distinctUntilChanged()
  );

  generators: IGenerator[] = [{
    pos: {x: 1, y: 1},
    name: 'A'
  }, {
    pos: {x: 2, y: 1},
    name: 'B'
  }, {
    pos: {x: 1, y: 2},
    name: 'C'
  }, {
    pos: {x: 2, y: 2},
    name: 'D'
  }];

  constructor() {
  }

  ngOnInit() {
  }
}
