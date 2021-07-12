// 允许一个函数接受不同数量或类型的参数时，做出不同的处理
function reverse(x: number): number
function reverse(x: string): string
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
function reverse(x: number | string): number | string | void {
	if (typeof x === 'number') {
		return Number(x.toString().split('').reverse().join(''))
	} else if (typeof x === 'string') {
		return x.split('').reverse().join('')
	}
}
console.log(reverse(821))
