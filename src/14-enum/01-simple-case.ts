// 枚举成员会被赋值为从 0 开始递增的数字，同时会对枚举值和枚举名进行反向映射
enum Days {
	Sun,
	Mon,
	Tue,
	Wed,
	Thu,
	Fri,
	Sat
}
console.log(Days[0] === 'Sun') // true
console.log(Days['Sun'] === 0) // true
