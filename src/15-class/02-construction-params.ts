// 修饰符和 readonly 还可以使用在构造函数的参数中，
// 等同于在类中定义该属性，同时给该属性赋值，使代码更简洁。

class Animal4 {
	// public name: string;
	// eslint-disable-next-line @typescript-eslint/no-parameter-properties
	public constructor(public name: string) {
		// this.name = name;
	}
	sayHi() {
		console.log(this.name)
	}
}
const a4 = new Animal4('动物')
a4.sayHi()
