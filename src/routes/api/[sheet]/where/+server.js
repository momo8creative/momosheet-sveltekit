import { json } from '@sveltejs/kit'
import db from '$lib/database'

export const GET = async (event) => {
	const { sheet } = event.params
	const api_key = event.request.headers.get('api-key')
	const where = Object.fromEntries(event.url.searchParams)

	// const respon = { sheet, api_key, where: obj }
	const respon = await db.client.find({ api_key, sheet, where })

	return json(respon)
}
