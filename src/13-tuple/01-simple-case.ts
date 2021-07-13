// 数组合并了相同类型的对象，而元组合并了不同类型的对象
let tomC: [string, number]
tomC = ['Tom', 12]
tomC[0] = 'Tom'
tomC[1] = 25
tomC[0].slice(1)
tomC[1].toFixed(2)

// 添加越界的元素时候，它的类型会被限制为元组中每个类型的联合类型
tomC.push(12)
console.log(tomC)

// 将报错，不能将 string 赋值给 undefined
// tomC[3] = 'hello'

// 以下将报错，true 不是 string | number 联合类型中
// tomC.push(true)
