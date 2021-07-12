// 1. 类型 + 方括号表示法
let fibonaci: number[] = [1, 1, 2, 3, 5]

// 数组项中不允许出现其他类型，且也会对数组方法进行类型限制，
// 以下代码会报错，因为 '8' 不是 number 类型
// fibonaci.push('8')

// 2. 数组泛型表示法 Array<elemType>
const oddList: Array<number> = [1, 3, 5, 7, 9]

// 3. 数组接口表示法，普通数组不建议使用这种方式，除非是类数组
interface NumberArray {
	[index: number]: number
}
let evenList: NumberArray = [2, 4, 6, 8, 10]

// 类数组
// IArguments 是内置的接口类型
interface IArguments {
	[index: number]: any
	length: number
	callee: Function
}
function sum() {
	let args: IArguments = arguments
}

// 任意类型的数组
let list: any[] = ['bulandent', 12, { weisite: 'https://bubuzou.com' }]
