import serializer = require('../src/index');

expect.addSnapshotSerializer(serializer);

const { wrap } = serializer;
const example = `paragraph "one"\n\n'paragraph' \\two\\`;

test('before', () => {
  expect(example).toMatchSnapshot();
});

test('after', () => {
  expect(wrap(example)).toMatchSnapshot();
});
