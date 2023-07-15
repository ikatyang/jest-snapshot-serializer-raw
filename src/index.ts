import always from './always.js'

const RAW = Symbol.for('jest-snapshot-serializer-raw')

export interface Wrapper {
  [RAW]: string
}

export function wrap(value: string): Wrapper {
  return { [RAW]: value }
}

function test(value: any): boolean {
  return value && always.test(value[RAW])
}

function print(value: unknown): string {
  const wrapper = value as Wrapper
  return always.print(wrapper[RAW])
}

export default { test, print }
