import { expect, test } from 'vitest'
import serializer, { wrap } from '../src/index.js'

expect.addSnapshotSerializer(serializer)

const example = `paragraph "one"\n\n'paragraph' \\two\\`

test('before', () => {
  expect(example).toMatchSnapshot()
})

test('after', () => {
  expect(wrap(example)).toMatchSnapshot()
})
