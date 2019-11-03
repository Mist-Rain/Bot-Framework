# hex-lib

    hex helper func

```
npm install hex-lib
```

if u think function name is wrong or not clear mean, wellcome post [issues](https://github.com/bluelovers/hex-lib/issues)

```ts
import { hexAndAny, toHex, hexAnd, hexOr, hexAdd, hexSub, hexAndSub } from '../index';
import POSTAG from './_postag';

let r;
let padLen = 8;

r = hexAndAny(POSTAG.D_N, POSTAG.D_N);

console.log(toHex(r, padLen), r === POSTAG.D_N, r);
// => 0x00100000 true 1048576

r = hexAndAny(POSTAG.D_N | POSTAG.D_T, POSTAG.D_N, POSTAG.D_T);

console.log(toHex(r, padLen), r === POSTAG.D_N, r);
// => 0x00100000 true 1048576

r = hexAndAny(POSTAG.D_N | POSTAG.D_T, POSTAG.D_T, POSTAG.D_N);

console.log(toHex(r, padLen), r === POSTAG.D_T, r);
// => 0x00004000 true 16384

r = hexAdd(0, POSTAG.D_T, POSTAG.D_N);

console.log(toHex(r, padLen), r === (POSTAG.D_T | POSTAG.D_N), r);
// => 0x00104000 true 1064960

r = hexSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T);

console.log(toHex(r, padLen), r === (POSTAG.D_N), r);
// => 0x00100000 true 1048576

r = hexAndSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T, POSTAG.BAD);
// => 0x00100000 true 1048576

console.log(toHex(r, padLen), r === (POSTAG.D_N), r);

r = hexAndSub((POSTAG.D_T | POSTAG.D_N), POSTAG.D_T, POSTAG.BAD, POSTAG.D_N);

console.log(toHex(r, padLen), r === (0), r);
// => 0x00000000 true 0
```
