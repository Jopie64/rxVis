export interface IPos {
  x: number;
  y: number;
}

export interface IRxNodeBase {
  pos: IPos;
  name: string;
}

export interface IRxGenerator extends IRxNodeBase {
  type: 'generator';
}

export interface IRxOperator extends IRxNodeBase {
  type: 'operator';
}

export interface IRxOutput extends IRxNodeBase {
  type: 'output';
}

export type IRxNode = IRxGenerator | IRxOperator | IRxOutput;

export interface IRxLink {
    pos: IPos;
    horizontal: boolean;
}

export interface IRxSequence {
  linkIx: number;
  value: string;
}

export interface IRxConfig {
    nodes: IRxNode[];
    links: IRxLink[];
    sequence: IRxSequence[];
}
