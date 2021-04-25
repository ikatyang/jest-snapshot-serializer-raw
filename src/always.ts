export function test(value: any): value is string {
  return typeof value === 'string';
}

export function print(value: string): string {
  return value;
}
