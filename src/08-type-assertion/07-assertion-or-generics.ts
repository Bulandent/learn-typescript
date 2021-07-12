// 通过泛型来约束类型
function getCacheData<T>(key: string): T {
	return (window as any).cache[key]
}

interface Cat {
	name: string
	run: () => void
}

const tom2 = getCacheData<Cat>('tom')
tom2.run()
