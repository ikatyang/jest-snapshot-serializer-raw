# jest-snapshot-serializer-raw

[![npm](https://img.shields.io/npm/v/jest-snapshot-serializer-raw.svg)](https://www.npmjs.com/package/jest-snapshot-serializer-raw)
[![build](https://img.shields.io/github/actions/workflow/status/ikatyang/jest-snapshot-serializer-raw/test.yml)](https://github.com/ikatyang/jest-snapshot-serializer-raw/actions?query=branch%3Amaster)

jest snapshot serializer for reducing escapes in the snapshot file

(This package is modified from [prettier/prettier:tests_config/raw-serializer.js@`9ec1da1a`](https://github.com/prettier/prettier/blob/9ec1da1ad185a226280212a62a42319965a62ffc/tests_config/raw-serializer.js))

[Changelog](https://github.com/ikatyang/jest-snapshot-serializer-raw/blob/master/CHANGELOG.md)

## Install

```sh
npm install jest-snapshot-serializer-raw
```

Note: This package is now pure ESM, you may want to install `jest-snapshot-serializer-raw@1` if you'd like to use it in CJS environment

## Usage

### Apply to specified snapshots

In setup file or test file:

```js
import serializerRaw from 'jest-snapshot-serializer-raw'
expect.addSnapshotSerializer(serializerRaw)
```

In test file:

```js
import { wrap } from 'jest-snapshot-serializer-raw'
const example = `paragraph "one"\n\n'paragraph' \\two\\`

test('before', () => {
  expect(example).toMatchSnapshot()
})

test('after', () => {
  expect(wrap(example)).toMatchSnapshot()
})
```

In snapshot file:

```js
exports[`before 1`] = `
"paragraph \\"one\\"

'paragraph' \\\\two\\\\"
`

exports[`after 1`] = `
paragraph "one"

'paragraph' \\two\\
`
```

### Apply to all snapshots

In setup file or test file:

```js
import serializerRaw from 'jest-snapshot-serializer-raw/always'
expect.addSnapshotSerializer(serializerRaw)
```

In test file:

```js
const example = `paragraph "one"\n\n'paragraph' \\two\\`

test('after', () => {
  expect(example).toMatchSnapshot()
})
```

In snapshot file:

```js
exports[`after 1`] = `
paragraph "one"

'paragraph' \\two\\
`
```

## Development

```sh
# lint
pnpm run lint

# build
pnpm run build

# test
pnpm run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
