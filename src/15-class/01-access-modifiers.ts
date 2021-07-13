// TypeScript 定义类可以使用 3 种访问修饰符：public、private、protected
// public：默认的修饰符，修饰属性和方法是公有的，任何地方都可以访问。
// private: private 修饰的属性和方法不能在外部被访问（实例或者子类中）；如果 private 修饰构造函数，那么该类将不能被实例化和被继承。
// protected：protected 修饰的属性和方法不能在实例中访问（子类内部可以）；如果 protected 修饰构造函数，那么该类被继承，不能被实例化。

class Animal3 {
	protected name
	protected constructor(name: string) {
		this.name = name
	}
	protected sayHi() {
		console.log(this.name)
	}
}
class Cat3 extends Animal3 {
	constructor(name: string) {
		super(name)
		console.log(this.name)
	}
}
// 以下将报错
// const animal3: Animal3 = new Animal3('Cat')
// console.log(animal3.name)
