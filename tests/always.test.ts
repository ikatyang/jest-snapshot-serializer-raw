import { expect, test } from 'vitest'
import serializer from '../src/always.js'

expect.addSnapshotSerializer(serializer)

const example = `paragraph "one"\n\n'paragraph' \\two\\`

test('after', () => {
  expect(example).toMatchSnapshot()
})
