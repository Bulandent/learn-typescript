import { name, getName, Directions, Options, Animal } from '../../types/demo'

// const aa: TargetContext = '_blank'

console.log(name)
let myName = getName()
let cat = new Animal('Tom')
let directions = [Directions.UP, Directions.DOWN, Directions.LEFT, Directions.RIGHT]
let options: Options = {
	data: {
		name: 'foo'
	}
}
