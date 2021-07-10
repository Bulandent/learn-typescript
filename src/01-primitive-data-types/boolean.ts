const isDone: boolean = false

// 以下这个会编译报错，new Boolean() 返回的是对象
// const hasContain: boolean = new Boolean(1)

// eslint-disable-next-line no-new-wrappers
const isBoolean: Boolean = new Boolean(1)

const isTrue: boolean = Boolean(true)
