// 泛型接口

interface CreateArrayFunc<T> {
	// eslint-disable-next-line @typescript-eslint/prefer-function-type
	(length: number, value: T): Array<T>
}
let createArray2: CreateArrayFunc<any>
createArray2 = function <T>(length: number, value: T): Array<T> {
	let result: T[] = []
	for (let i = 0; i < length; i++) {
		result[i] = value
	}
	return result
}

createArray2(3, 'x') // ['x', 'x', 'x']
