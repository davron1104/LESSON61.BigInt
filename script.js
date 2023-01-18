'use strict';

const bigInt = 123456789022222222222222222222222222223333333333n;

const sameBigInt = BigInt(123456789022222222222222222222222222223333333333);

// console.log(typeof(bigInt));
// console.log(typeof(sameBigInt));

let bigint = 5n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);