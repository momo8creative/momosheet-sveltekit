import { json } from '@sveltejs/kit'
import db from '$lib/database'

export const GET = async (event) => {
	const { sheet } = event.params
	const limit = event.url.searchParams.get('limit')
	const skip = event.url.searchParams.get('skip')
	const api_key = event.request.headers.get('api-key')

	const respon = await db.client.find({ api_key, sheet, limit, skip })

	return json(respon)
}

export const POST = async (event) => {
	const { sheet } = event.params
	const uniq = event.url.searchParams.get('uniq')

	const body = await event.request.json()
	const api_key = event.request.headers.get('api-key')
	const respon = await db.client.create({ api_key, sheet, body, uniq })

	return json(respon)
}
