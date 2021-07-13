class Animal5 {
	public readonly name: string
	constructor(name: string) {
		this.name = name
	}
	sayHi() {
		console.log(this.name)
	}
}
const a5 = new Animal5('动物')

// 只读属性不能被访问
// a5.name = 'hh'
