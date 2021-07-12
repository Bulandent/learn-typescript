interface Animal1 {
	name: string
	age?: number
	[propName: string]: string | number | undefined
}

const cat1: Animal1 = {
	name: 'Tom',
	age: 12,
	gender: 'male'
}

// 一旦定义了任意属性，那么固定属性和可选属性的类型必须是它的子类型；
// 上面的代码中的任意属性必须包含 string 和 number，
// 如果是 strict 模式下，则还必须包含 undefined，因为 age 是可选属性；
