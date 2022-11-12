import { json } from '@sveltejs/kit'
import db from '$lib/database'

export const DELETE = async (event) => {
	const { id, sheet } = event.params
	const api_key = event.request.headers.get('api-key')

	const respon = await db.client.delete({ api_key, sheet, id })

	return json(respon)
}

export const PUT = async (event) => {
	const { id, sheet } = event.params
	const api_key = event.request.headers.get('api-key')
	const body = await event.request.json()

	const respon = await db.client.update({ api_key, sheet, id, body })

	return json(respon)
}
