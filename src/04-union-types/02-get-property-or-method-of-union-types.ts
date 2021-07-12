// 访问联合类型的属性或方法的时候，必须是所有类型都共有的属性和方法
function getLength(some: string | number): string | number {
	return some.toString()
	// 以下将报错，因为 number 类型没有 length 属性
	// return some.length
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let mine1: string | number

// 此时 mine1 为 number 类型
mine1 = 7

// 以下将报错
// consoel.log(mine.length)
