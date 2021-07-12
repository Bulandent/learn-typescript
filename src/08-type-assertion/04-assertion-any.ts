// 3. 将任何一个类型断言为 any
let foo: number = 1
console.log((foo as any).length)

// 4. 将 any 类型断言为一个具体的类型
function getCacheData(key: string): any {
	return (window as any).cache[key]
}
interface Cat {
	name: string
	run: () => void
}
// 将返回的数据断言为 Cat 后，方便了后续的操作（代码补全等）
const tom = getCacheData('tom') as Cat
tom.run()
