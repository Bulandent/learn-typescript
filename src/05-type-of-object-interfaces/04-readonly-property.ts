interface Animal2 {
	readonly id: number
	name: string
	age?: number
	[propName: string]: any
}

const dog: Animal2 = {
	id: 89,
	name: 'Buber',
	gender: 'male'
}

// 以下将报错，只读属性不能在变量被初始化后被赋值
// dog.id = 100
