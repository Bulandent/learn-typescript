// 函数可选参数
function buildName(firstName: string, lastName?: string): string {
	return lastName ? `${firstName} ${lastName}` : firstName
}

// 可选参数后面不允许再出现必需参数
