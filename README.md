# tiny-search-params

> Tiny (~300b) and ultra fast query-string like utility

## Installation

```sh
npm i tiny-search-params
```

## Usage

```js
import {parse, stringify} from 'tiny-search-params '

stringify({ foo: 1, bar: [2, 3] })
//=> foo=1&bar=2&bar=3

parse('foo=1&bar=2&bar=3')
//=> { foo: '1', bar: ['2', '3'] }
```

## Benchmark

```
$ node benchmark-parse.js
[bench] ale-url-parser x 19,291 ops/sec ±2.01% (85 runs sampled)
[bench] url x 9,033 ops/sec ±3.38% (81 runs sampled)
[bench] query-string x 8,484 ops/sec ±1.50% (83 runs sampled)
[bench] fast-url-parser x 21,066 ops/sec ±1.16% (89 runs sampled)
[bench] tiny-search-params x 22,603 ops/sec ±1.35% (86 runs sampled)
[bench] Fastest is url-params
```