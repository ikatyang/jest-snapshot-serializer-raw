const RAW = Symbol.for('jest-snapshot-serializer-raw');

export interface Wrapper {
  [RAW]: string;
}

export function test(something: any): something is Wrapper {
  return something && typeof something[RAW] === 'string';
}

export function print(wrapper: Wrapper): string {
  return wrapper[RAW];
}

export function wrap(value: string): Wrapper {
  return { [RAW]: value };
}

export default wrap;
