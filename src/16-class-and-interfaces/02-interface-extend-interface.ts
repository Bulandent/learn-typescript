// 接口继承接口，

interface Alarm1 {
	alert: () => void
}

// LightableAlarm 除了拥有 Alarm1 的方法外，还有自己的两个方法
interface LightableAlarm extends Alarm1 {
	lightOn: () => void
	lightOff: () => void
}
