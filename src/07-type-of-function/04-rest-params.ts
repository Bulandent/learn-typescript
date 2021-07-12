// 剩余参数
function push(array: number[], ...items: number[]) {
	items.forEach((item) => {
		array.push(item)
	})
}
let a: number[] = []
push(a, 1, 2, 3)

// rest 参数只能是最后一个参数
