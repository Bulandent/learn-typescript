// 类型断言有什么限制？
// 要使得 A 能够被断言为 B，那么需要 A 兼容 B 或者 B 兼容 A
// 什么是 A 兼容 B 呢？
interface Animal {
	name: string
}
interface Cat {
	name: string
	run: () => void
}
// Cat 包含了 Animal 中的所有属性，除此之外，它还有一个额外的方法，其实就可以理解为 Animal 兼容了 Cat。

// Cat 和 Animal 的关系其实就是继承的，等同于如下这个代码块。
// interface Cat extends Animal {
// 	run: () => void
// }

// Animal 兼容了 Cat，所以它们之间可以互相进行断言
function testAnimal(animal: Animal) {
	return animal as Cat
}
function testCat(cat: Cat) {
	return cat as Animal
}
const cat2: Cat = {
	name: 'Tom',
	run: () => {}
}
console.log(testCat(cat2))
