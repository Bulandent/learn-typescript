// 泛型是在定义函数、接口或类的时候不预先指定类型，而在使用的时候再指定类型的一种特性。

function createArray<T>(length: number, value: T): Array<T> {
	let result: T[] = []
	for (let i = 0; i < length; i++) {
		result[i] = value
	}
	return result
}

// 泛型支持多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
	return [tuple[1], tuple[0]]
}
// swap([7, 'seven']); // ['seven', 7]
