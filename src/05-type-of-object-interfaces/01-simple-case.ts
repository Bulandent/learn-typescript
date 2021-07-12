// 接口通常用于对类的一部分行为进行抽象（后面会学到），也常用于对对象的形状进行描述。

interface Person {
	name: string
	age: number
}

// 赋值的时候变量的形状必须和接口保持一致，多或者少一个属性都是不允许的
const kk: Person = {
	name: 'kangkang',
	age: 12
}
