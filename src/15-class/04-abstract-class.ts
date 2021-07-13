// 抽象类不允许被实例化，只能被继承
// 抽象类中的抽象方法必须被子类实现

abstract class Animal7 {
	public name: string
	public constructor(name: string) {
		this.name = name
	}
	public abstract sayHi(): void
}

// 以下报错
// let a = new Animal('Jack');

class Cat7 extends Animal7 {
	public sayHi() {
		console.log('hi')
	}
}
