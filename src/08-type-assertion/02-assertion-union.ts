// 1. 将一个联合类型断言为其中一个类型
interface Cat {
	name: string
	run: () => void
}
interface Fish {
	name: string
	swim: () => void
}
function swim(animal: Cat | Fish) {
	;(animal as Fish).swim()
}
const c: Cat = {
	name: 'Tom',
	run: () => {}
}
swim(c)

// 类型断言虽然能避免以上例子在编译的时候报错，但是在运行时，由于 Cat 没有 swim 方法，所以会报错
