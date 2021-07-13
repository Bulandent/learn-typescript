// 未手动赋值的枚举项会接着上一个枚举项递增 1，即使上一项是小数或负数
// 以下存在覆盖，{'2': 'Sun', '3': 'Mon'} 这两项将被覆盖
// 如果手动赋值的时候，赋值的不是数值（非最后一项），那么需要给每个项都进行赋值
enum Days1 {
	Sun = 2,
	Mon,
	Tue = 0,
	Wed,
	Thu,
	Fri,
	Sat = 'a'
}
console.log(Days1) // 3
// {
//   '0': 'Tue',
//   '1': 'Wed',
//   '2': 'Thu',
//   '3': 'Fri',
//   Sun: 2,
//   Mon: 3,
//   Tue: 0,
//   Wed: 1,
//   Thu: 2,
//   Fri: 3,
//   Sat: 'a'
// }

// 所以不建议手动赋值枚举，会存在问题
