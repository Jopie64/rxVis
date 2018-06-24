import { IRxNode, IRxGenerator, IRxOperator, IRxConfig, IRxOutput, IRxLink } from './rxConfigDef';

const gen = (name: string, x: number, y: number): IRxGenerator => ({
    type: 'generator', name, pos: {x, y}
});

const op = (name: string, x: number, y: number): IRxOperator => ({
    type: 'operator', name, pos: {x, y}
});

const out = (name: string, x: number, y: number): IRxOutput => ({
    type: 'output', name, pos: {x, y}
});

const link = (x: number, y: number, horizontal = false): IRxLink => ({
    pos: { x, y }, horizontal
});

export const demoNodeTypes: IRxConfig = {
  nodes: [
      gen('A', 1, 1),
      gen('B', 2, 1),
      gen('C', 1, 2),
      gen('D', 2, 2),
      op('map',       4, 1),
      op('scan',      6, 1),
      op('debounce',  4, 2),
      op('switchMap', 6, 2),
      out('O1', 1, 4),
      out('O2', 2, 4),
      out('O3', 1, 5),
      out('O4', 2, 5)
  ],
  links: []
};

export const inMapOut: IRxConfig = {
    nodes: [
        gen('S', 1, 1),
        op('map(v => v + 1)', 1, 3),
        out('Out', 1, 5)
    ],
    links: [
        link(1, 2),
        link(1, 4)
    ]
};
