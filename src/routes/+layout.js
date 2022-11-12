export const load = (event) => {
	const title = event.route.id == '/' ? 'Home | Momo Sheet' : 'Momo Sheet'

	return {
		title
	}
}
