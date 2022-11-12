import db from '$lib/database'
import { invalid } from '@sveltejs/kit'

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData()
		let body = {}
		body['spread_id'] = formData.get('spread_id')
		body['api_key'] = crypto.randomUUID()
		// console.log(spread_id)

		const respon = await db.spread.create({ body })
		console.log(respon)
		if (!respon || respon.error) {
			return invalid(400, { invalid: true, message: 'Gagal tambah spreadsheet baru !' })
		}

		return { success: true, spread: respon.data }
	}
}
