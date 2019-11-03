/**
 * Created by user on 2018/6/8/008.
 */
/**
 * check if n include any of ...p
 */
export declare function hexAndAny(n: number, p?: number, ...argv: number[]): number;
/**
 * @deprecated i can't remember why write this
 */
export declare function hexAnd(n: number, p?: number, ...argv: number[]): number;
/**
 * hex => hex string
 */
export declare function toHex(p: number, padLen?: number, prefix?: string): string;
/**
 * return n | p
 */
export declare function hexAdd(n: number, p?: number, ...argv: number[]): number;
/**
 * return n ^ p
 */
export declare function hexSub(n: number, p?: number, ...argv: number[]): number;
/**
 * check if n include v, or n === r
 * by default r = n
 */
export declare function hexHas(n: number, v: number, r?: number): number | boolean;
/**
 * if ...p include in n, than n ^ p
 */
export declare function hexAndSub(n: number, p?: number, ...argv: number[]): number;
import * as self from './index';
export default self;
