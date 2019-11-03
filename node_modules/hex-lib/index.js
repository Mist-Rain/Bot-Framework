"use strict";
/**
 * Created by user on 2018/6/8/008.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function hexAndAny(n, ...argv) {
    if (!argv.length) {
        return n;
    }
    for (let v of argv) {
        let r = (n & v);
        if (r) {
            return r;
        }
    }
    return 0;
}
exports.hexAndAny = hexAndAny;
function hexAnd(n, ...argv) {
    if (argv.length) {
        let r = 0;
        for (let v of argv) {
            let p = n & v;
            if (!p) {
                return 0;
            }
            r |= v;
        }
        return r;
    }
    return n;
}
exports.hexAnd = hexAnd;
/**
 * hex => hex string
 */
function toHex(p, padLen = 4, prefix = '0x') {
    return prefix + p
        .toString(16)
        .padStart(padLen || 0, '0')
        .toUpperCase();
}
exports.toHex = toHex;
function hexAdd(n, ...argv) {
    if (argv.length) {
        let r = n;
        for (let v of argv) {
            r |= v;
        }
        return r;
    }
    return n;
}
exports.hexAdd = hexAdd;
function hexSub(n, ...argv) {
    if (argv.length) {
        let r = n;
        for (let v of argv) {
            r ^= v;
        }
        return r;
    }
    return n;
}
exports.hexSub = hexSub;
/**
 * check if n include v, or n === r
 * by default r = n
 */
function hexHas(n, v, r) {
    if (typeof r === 'undefined' || r === null) {
        r = n;
    }
    return (n & v) || (v && v === r);
}
exports.hexHas = hexHas;
function hexAndSub(n, ...argv) {
    if (argv.length) {
        let r = n;
        for (let v of argv) {
            let p = hexHas(r, v);
            if (p) {
                r ^= v;
            }
        }
        return r;
    }
    return n;
}
exports.hexAndSub = hexAndSub;
const self = require("./index");
exports.default = self;
