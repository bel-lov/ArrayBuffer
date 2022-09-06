import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter';

test('метод load', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  expect(converter.buffer).toEqual(buffer);
});

test('метод toString', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const converterString = converter.toString();
  expect(converterString).toEqual(' {"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
