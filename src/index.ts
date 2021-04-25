import * as always from './always';

const RAW = Symbol.for('jest-snapshot-serializer-raw');

export interface Wrapper {
  [RAW]: string;
}

export function wrap(value: string): Wrapper {
  return { [RAW]: value };
}

export function test(value: any): value is Wrapper {
  return value && always.test(value[RAW]);
}

export function print(value: Wrapper): string {
  return always.print(value[RAW]);
}

export default wrap;
