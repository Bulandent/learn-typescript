// 泛型约束：在函数内部使用泛型变量的时候，因为不知道其类型，
// 所以不能随意操作它的属性或方法，这个时候就可以通过约束来处理。

interface Lengthwise {
	length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
	return arg
}

// 多个类型参数之间也可以互相约束
function copyFields<T extends U, U>(target: T, source: U): T {
	// eslint-disable-next-line guard-for-in
	for (let id in source) {
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		target[id] = (<T>source)[id]
	}
	return target
}
let x = { a: 1, b: 2, c: 3, d: 4 }
copyFields(x, { b: 10, d: 20 })
