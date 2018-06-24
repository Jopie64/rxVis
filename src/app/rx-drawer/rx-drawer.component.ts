import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { map, concatMap, repeat, share, distinctUntilChanged } from 'rxjs/operators';
import EZ from 'eases';
import { duration, ease } from '../tools';
import { IRxNode, IRxConfig, IRxGenerator, IRxOperator } from 'src/app/rxConfigDef';


@Component({
  selector: 'app-rx-drawer',
  templateUrl: './rx-drawer.component.html',
  styleUrls: ['./rx-drawer.component.css']
})
export class RxDrawerComponent implements OnInit {

  @Input() config: IRxConfig;

  generators: IRxGenerator[];
  operators: IRxOperator[];

  constructor() {
  }

  ngOnInit() {
    this.generators = this.config.nodes
      .filter(v => v.type === 'generator')
      .map(v => v as IRxGenerator);
    this.operators = this.config.nodes
      .filter(v => v.type === 'operator')
      .map(v => v as IRxOperator);
  }
}
