// 定义接口的某个属性为可选属性，那么在赋值给变量的时候允许某该属性存在或不存在

interface Animal {
	name: string
	age?: number
}

let cat: Animal = {
	name: 'Tom'
}
