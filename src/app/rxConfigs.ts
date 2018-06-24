import { IRxNode, IRxGenerator, IRxOperator, IRxConfig } from './rxConfigDef';

const g = (name: string, x: number, y: number): IRxGenerator => ({
    type: 'generator', name, pos: {x, y}
});

const o = (name: string, x: number, y: number): IRxOperator => ({
    type: 'operator', name, pos: {x, y}
});

export const demoNodeTypes: IRxConfig = {
  nodes: [
      g('A', 1, 1),
      g('B', 2, 1),
      g('C', 1, 2),
      g('D', 2, 2),
      o('map',       4, 1),
      o('scan',      6, 1),
      o('debounce',  4, 2),
      o('switchMap', 6, 2)
  ]
};
