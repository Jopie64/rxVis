import { Component, OnInit, Input } from '@angular/core';
import EZ from 'eases';
import { duration, ease } from '../tools';
import { IRxConfig, IRxGenerator, IRxOperator, IRxOutput, IPos, IRxNodeBase, IRxLink } from 'src/app/rxConfigDef';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
  values$: Observable<IMyCircleNode>[];
}

const makeInitial = (config: IRxConfig): IComponents => {
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

  const value = convertLink({ pos: { x: 1, y: 2}, horizontal: false });

  const value$ = duration(2000).pipe(
    ease(EZ.quadInOut),
    map(p => ({ center: {
          x: fromTo(value.xFrom, value.xTo, p),
          y: fromTo(value.yFrom, value.yTo, p)
        }, size: 30, name: '3'
      }))
    );

  const values$ = [value$];

  return {
    generators,
    operators,
    output,
    links,
    values$
  };
};

@Component({
  selector: 'app-rx-drawer',
  templateUrl: './rx-drawer.component.html',
  styleUrls: ['./rx-drawer.component.css']
})
export class RxDrawerComponent implements OnInit {

  @Input() config: IRxConfig;

  components: IComponents;

  constructor() {
  }

  ngOnInit() {
    this.components = makeInitial(this.config);
  }
}
