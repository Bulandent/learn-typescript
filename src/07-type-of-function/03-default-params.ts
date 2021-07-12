// 函数参数默认值
function printMsg(msg: string = 'bulandent', status: number): void {
	console.log(msg)
}
printMsg('success', 1000)
printMsg(undefined, 1000)

// 带默认值的参数会被识别为可选参数，此时就不受「可选参数必须接在必需参数后面」的限制了。
