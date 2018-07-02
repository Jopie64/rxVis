import { Component, OnInit, Input } from '@angular/core';
import EZ from 'eases';
import { duration, ease } from '../tools';
import { IRxConfig, IPos, IRxNodeBase, IRxLink } from 'src/app/rxConfigDef';
import { Observable, from, Subject, defer } from 'rxjs';
import { map, concatMap, switchMap } from 'rxjs/operators';


interface IMyLink {
  xFrom: number;
  yFrom: number;
  xTo: number;
  yTo: number;
}

interface IMyCircleNode {
  center: IPos;
  size: number;
  name: string;
}

interface IMyRectNode {
  tl: IPos;
  textPos: IPos;
  width: number;
  height: number;
  name: string;
}

interface IComponents {
  // Objects
  generators: IMyCircleNode[];
  operators: IMyRectNode[];
  output: IMyCircleNode[];
  links: IMyLink[];
  value$: Observable<IMyCircleNode | null>;
}

const makeInitial = (config: IRxConfig, start$: Observable<void>): IComponents => {
  const gpx = 100; // grid pixel size
  const gmg = 10;  // grid margin

  const gmid = gpx / 2; // Middle of grid
  const gmidToMar = gmid - gmg; // Distance from middle to margin
  const ld = gmid + gmg;

  const toDispCenter = (pos: IPos) => ({ x: pos.x * gpx, y: pos.y * gpx });
  const toDispRect = (pos: IPos) => ({ x: pos.x * gpx - gmidToMar, y: pos.y * gpx - gmidToMar });
  const toDispRectCenter = (pos: IPos) => ({ x: pos.x * gpx + gmid, y: pos.y * gpx });

  const toCircleNode = (v: IRxNodeBase): IMyCircleNode => ({
    center: toDispCenter(v.pos),
    name: v.name,
    size: gmidToMar
  });

  const toRectNode = (v: IRxNodeBase): IMyRectNode => ({
    tl: toDispRect(v.pos),
    textPos: toDispRectCenter(v.pos),
    name: v.name,
    width: gpx * 2 - gmg - gmg,
    height: gpx - gmg - gmg
  });

  const generators = config.nodes
    .filter(v => v.type === 'generator')
    .map(toCircleNode);

  const operators = config.nodes
    .filter(v => v.type === 'operator')
    .map(toRectNode);

  const output = config.nodes
    .filter(v => v.type === 'output')
    .map(toCircleNode);

  const convertLink = (l: IRxLink): IMyLink => l.horizontal
    ? { xFrom: l.pos.x * gpx - ld, yFrom: l.pos.y * gpx,
        xTo: l.pos.x * gpx + ld, yTo: l.pos.y * gpx }
    : { xFrom: l.pos.x * gpx, yFrom: l.pos.y * gpx - ld,
        xTo: l.pos.x * gpx, yTo: l.pos.y * gpx + ld };

  const fromTo = (f: number, t: number, p: number) => (t - f) * p + f;

  const links = config.links
    .map(convertLink);

  const value$ = start$.pipe(switchMap(_ => (from(config.sequence).pipe(
    map(s => ({link: links[s.linkIx], value: s.value })),
    concatMap(({ link, value }) =>
      duration(2000).pipe(
      ease(EZ.quadInOut),
      map(p => ({ center: {
            x: fromTo(link.xFrom, link.xTo, p),
            y: fromTo(link.yFrom, link.yTo, p)
          }, size: 30, name: value
        }))
      )
    )))));

  return {
    generators,
    operators,
    output,
    links,
    value$
  };
};

@Component({
  selector: 'app-rx-drawer',
  templateUrl: './rx-drawer.component.html',
  styleUrls: ['./rx-drawer.component.css']
})
export class RxDrawerComponent implements OnInit {

  @Input() config: IRxConfig;

  start$ = new Subject<void>();

  components: IComponents;

  constructor() {
  }

  ngOnInit() {
    this.components = makeInitial(this.config, this.start$);
  }
}
