// 泛型类

class GenericNumber<T> {
	zeroValue: T
	add: (x: T, y: T) => T
	constructor(zeroValue: T, add: (x: T, y: T) => T) {
		this.zeroValue = zeroValue
		this.add = add
	}
}

let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y)
console.log(myGenericNumber.add(2, 3))
