// 函数的合并，即重载
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
	if (typeof x === 'number') {
		return Number(x.toString().split('').reverse().join(''))
	} else if (typeof x === 'string') {
		return x.split('').reverse().join('')
	}
	return ''
}

// 接口的合并：会将属性简单的合并到一个接口中，
// 合并的属性的类型必须是唯一的，方法的合并和函数一样
interface Alarm3 {
	price: number
}
interface Alarm3 {
	weight: number
}

// 类的合并和接口一直
