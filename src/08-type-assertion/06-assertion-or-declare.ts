interface Animal {
	name: string
}

interface Cat {
	name: string
	run: () => void
}

const animal: Animal = {
	name: 'Tom'
}

// 类型断言
const tom1 = animal as Cat

// 类型声明，以下将报编译错误
// const tom2: Cat = animal;

// 类型断言和类型声明的区别
// animal 断言为 Cat：只需满足 Animal 兼容 Cat 或者 Cat 兼容 Animal 即可；
// animal 赋值给 Cat：需要满足 Cat 兼容 Animal 才行，上面的代码显然不兼容，所以编译报错；
