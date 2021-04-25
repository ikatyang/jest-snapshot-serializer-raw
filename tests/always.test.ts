import serializer = require('../src/always');

expect.addSnapshotSerializer(serializer);

const example = `paragraph "one"\n\n'paragraph' \\two\\`;

test('after', () => {
  expect(example).toMatchSnapshot();
});
