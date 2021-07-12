// 2. 将一个父类断言为更加具体的子类
interface ApiError extends Error {
	code: number
}
interface HttpError extends Error {
	statusCode: number
}

function isApiError(error: Error) {
	if (typeof (error as ApiError).code === 'number') {
		return true
	}
	return false
}
