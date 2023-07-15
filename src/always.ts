function test(value: any): boolean {
  return typeof value === 'string'
}

function print(value: unknown): string {
  return value as string
}

export default { test, print }
