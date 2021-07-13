// 字符串字面量类型：用来约束取值只能是某几个值中的一个。
type EventNames = 'click' | 'scroll' | 'mosemove'
function handleEvent(ele: Element, event: EventNames) {
	// dome something
}
handleEvent(document.getElementById('hello') as HTMLElement, 'scroll')

// 报错，event 不能为 'dblclick'
// handleEvent(document.getElementById('world') as HTMLElement, 'dblclick');
