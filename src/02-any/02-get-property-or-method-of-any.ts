// 在任意值上访问任何属性都是可以的
let thing: any = 'hello'
console.log(thing.name)
console.log(thing.name.firstName)

// 在任意值上访问任方法也都是可以的
thing.setName('bulandent')
thing.getName().sayHi()

// 声明一个变量为任意值后，对它的任何操作，返回的内容都是任意值。
