import { PUBLIC_API_URL } from '$env/static/public'
// import { error } from '@sveltejs/kit'

const fectData = async (q) => {
	console.log('q', q)
	const time = new Date().getTime().toString()

	const res = await fetch(PUBLIC_API_URL + '?q=' + JSON.stringify(q) + '&_=' + time)
	if (res.status == 200) {
		return await res.json()
	}
	console.log(res)
	return { error: true, status: 500, message: 'Gagal fetch data !' }
	// throw error(500, 'Gagal fetch data !')
}

const client = {
	find: async (req) => {
		req['action'] = 'read'
		return await fectData(req)
	},
	create: async (req) => {
		req['action'] = 'create'
		return await fectData(req)
	},
	update: async (req) => {
		req['action'] = 'update'
		return await fectData(req)
	},
	delete: async (req) => {
		req['action'] = 'delete'
		return await fectData(req)
	}
}

const spread = {
	create: async (req) => {
		req['action'] = 'addSpread'
		req['sheet'] = 'spread'

		return await fectData(req)
	}
}

export default { client, spread }
