// 二进制
const binaryLiteral: number = 0b101
// 二进制编译后
// var binaryLiteral = 5;

// 八进制
const octalLiteral: number = 0o712
// 八进制编译后
// var octalLiteral = 458;

// 十进制
const decLiteral: number = 6

// 十六进制
const hexLiteral: number = 0xf00

const invalidNumber: number = NaN

const infinityNumber: number = Infinity

console.log(binaryLiteral, octalLiteral, decLiteral, hexLiteral)
// 5 458 6 3840

// 二进制和八进制被编译后会转成十进制，但是十六进制不会转
