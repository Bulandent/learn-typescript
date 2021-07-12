// 1. 函数声明
function sum1(x: number, y: number): number {
	return x + y
}

// 2. 函数表达式
const sum2 = function (x: number, y: number): number {
	return x + y
}

// 3. 用接口定义函数
interface GetSum {
	// eslint-disable-next-line @typescript-eslint/prefer-function-type
	(x: number, y: number): number
}
let sum3: GetSum
sum3 = function (x: number, y: number) {
	return x + y
}
