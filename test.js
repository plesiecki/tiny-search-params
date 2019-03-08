import test from 'ava';
import { stringify, parse } from '.';

test('should return empty string from plain object', t => {
  t.is(stringify({}), '')
});

test('should serialize query object to string', t => {
  const input = { foo: 1, bar: 2 };

  t.is(stringify(input), 'foo=1&bar=2')
});

test('should serialize query object with values of single key', t => {
  const input = { foo: 1, bar: [2, 3] };

  t.is(stringify(input), 'foo=1&bar=2&bar=3')
});

test('should return empty plain object from empty string', t => {
  t.deepEqual(parse(''), {})
});

test('should return empty plain object from string containing only ?', t => {
  t.deepEqual(parse('?'), {})
});

test('should deserialize query string to object', t => {
  const input = 'foo=1&bar=2';

  t.deepEqual(parse(input), {
    foo: '1',
    bar: '2',
  });
});

test('should deserialize query string with ? to object', t => {
  const input = '?foo=1&bar=2';

  t.deepEqual(parse(input), {
    foo: '1',
    bar: '2',
  });
});

test('should deserialize query string with mutiple instances of the same key', t => {
  const input = 'foo=1&bar=2&bar=3';

  t.deepEqual(parse(input), {
    foo: '1',
    bar: ['2', '3'],
  });
});