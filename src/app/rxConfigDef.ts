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

export type IRxNode = IRxGenerator | IRxOperator;

export interface IRxConfig {
    nodes: IRxNode[];
}
