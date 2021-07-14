// 在 TypeScritp 中接口还能继承类
// 因为在声明类的时候会创建和类名一样的类型，这个类型只包含了其中的实例属性和实例方法

class Point {
	/** 静态属性，坐标系原点 */
	static origin = new Point(0, 0)
	/** 静态方法，计算与原点距离 */
	static distanceToOrigin(p: Point) {
		return Math.sqrt(p.x * p.x + p.y * p.y)
	}
	/** 实例属性，x 轴的值 */
	x: number
	/** 实例属性，y 轴的值 */
	y: number
	/** 构造函数 */
	constructor(x: number, y: number) {
		this.x = x
		this.y = y
	}
	/** 实例方法，打印此点 */
	printPoint() {
		console.log(this.x, this.y)
	}
}

interface PointInstanceType {
	x: number
	y: number
	printPoint: () => void
}

// 上例中 Point 类和 PointInstanceType 类型是等价的。

interface Point3d extends Point {
	z: number
}

// 就相当于是
// interface Point3d extends PointInstanceType {
// 	z: number;
// }
