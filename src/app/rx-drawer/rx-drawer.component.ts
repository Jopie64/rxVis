import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { map, concatMap, repeat, share, distinctUntilChanged } from 'rxjs/operators';
import EZ from 'eases';
import { duration, ease } from '../tools';
import { IRxNode, IRxConfig, IRxGenerator, IRxOperator, IRxOutput, IRxLink } from 'src/app/rxConfigDef';



@Component({
  selector: 'app-rx-drawer',
  templateUrl: './rx-drawer.component.html',
  styleUrls: ['./rx-drawer.component.css']
})
export class RxDrawerComponent implements OnInit {

  @Input() config: IRxConfig;

  // Metrics
  gpx = 100; // grid pixel size
  gmg = 10;  // grid margin

  gmid = this.gpx / 2; // Middle of grid
  gmidToMar = this.gmid - this.gmg; // Distance from middle to margin

  // Objects
  generators: IRxGenerator[];
  operators: IRxOperator[];
  output: IRxOutput[];

  constructor() {
  }

  ngOnInit() {
    this.generators = this.config.nodes
      .filter(v => v.type === 'generator')
      .map(v => v as IRxGenerator);
    this.operators = this.config.nodes
      .filter(v => v.type === 'operator')
      .map(v => v as IRxOperator);
    this.output = this.config.nodes
      .filter(v => v.type === 'output')
      .map(v => v as IRxOutput);
  }
}
