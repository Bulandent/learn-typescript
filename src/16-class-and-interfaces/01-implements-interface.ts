// 类能实现多个接口，必须实现接口的所有方法

interface Alarm {
	alert: () => void
}
interface Light {
	lightOn: () => void
	lightOff: () => void
}
class Car implements Alarm, Light {
	alert() {
		console.log('Car alert')
	}
	lightOn() {
		console.log('Car light on')
	}
	lightOff() {
		console.log('Car light off')
	}
}
