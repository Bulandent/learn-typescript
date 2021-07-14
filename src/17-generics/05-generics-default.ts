// 泛型参数可以指定默认类型

function createArray3<T = string>(length: number, value: T): Array<T> {
	let result: T[] = []
	for (let i = 0; i < length; i++) {
		result[i] = value
	}
	return result
}
