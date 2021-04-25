# jest-snapshot-serializer-raw

[![npm](https://img.shields.io/npm/v/jest-snapshot-serializer-raw.svg)](https://www.npmjs.com/package/jest-snapshot-serializer-raw)
[![build](https://img.shields.io/travis/ikatyang/jest-snapshot-serializer-raw/master.svg)](https://travis-ci.org/ikatyang/jest-snapshot-serializer-raw/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/jest-snapshot-serializer-raw/master.svg)](https://codecov.io/gh/ikatyang/jest-snapshot-serializer-raw)

jest snapshot serializer for reducing escapes in the snapshot file

(This package is modified from [prettier/prettier:tests_config/raw-serializer.js@`9ec1da1a`](https://github.com/prettier/prettier/blob/9ec1da1ad185a226280212a62a42319965a62ffc/tests_config/raw-serializer.js))

[Changelog](https://github.com/ikatyang/jest-snapshot-serializer-raw/blob/master/CHANGELOG.md)

## Install

```sh
# using npm
npm install --save-dev jest-snapshot-serializer-raw

# using yarn
yarn add --dev jest-snapshot-serializer-raw
```

## Usage

### Apply to specified snapshots

```json
{
  "snapshotSerializers": ["jest-snapshot-serializer-raw"]
}
```

```js
// test.js

const { wrap } = require('jest-snapshot-serializer-raw');
const example = `paragraph "one"\n\n'paragraph' \\two\\`;

test('before', () => {
  expect(example).toMatchSnapshot();
});

test('after', () => {
  expect(wrap(example)).toMatchSnapshot();
});
```

```js
// test.js.snap

exports[`before 1`] = `
"paragraph \\"one\\"

'paragraph' \\\\two\\\\"
`;

exports[`after 1`] = `
paragraph "one"

'paragraph' \\two\\
`;
```

### Apply to all snapshots

```json
{
  "snapshotSerializers": ["jest-snapshot-serializer-raw/always"]
}
```

```js
// test.js

const example = `paragraph "one"\n\n'paragraph' \\two\\`;

test('after', () => {
  expect(example).toMatchSnapshot();
});
```

```js
// test.js.snap

exports[`after 1`] = `
paragraph "one"

'paragraph' \\two\\
`;
```

## Development

```sh
# lint
yarn run lint

# build
yarn run build

# test
yarn run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
