export async function createRequest(
	method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
	reqPath: string,
	body?: string
) {
	return await fetch(reqPath, {
		method: method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
}
