// 类型别名: 给类型起一个新的名字
type Name = string
type NameResolve = () => string
type TargetContext = Name | NameResolve
function getName(n: NameResolve): Name {
	if (typeof n === 'string') {
		return n
	} else {
		return n()
	}
}
