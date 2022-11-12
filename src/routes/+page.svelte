<script>
	import { enhance } from '$app/forms'
	let spread

	function copyTo(e) {
		let value = e.target.value
		console.log(value)
		navigator.clipboard.writeText(value)
		alert('Berhasil copy : ' + value)
	}
</script>

<h1 class=" p-4 text-4xl">Selamat datang !</h1>

{#if !spread}
	<form
		class="bg-slate-500  p-4"
		action=""
		method="post"
		use:enhance={() => {
			return async ({ result }) => {
				spread = result.data.spread
				// console.log(result)
			}
		}}
	>
		<h1 class="text-2xl font-semibold text-white">Daftar Spreadsheet baru</h1>
		<label class="block text-white" for="spread_id">Spread ID</label>
		<div class="flex gap-2">
			<input class="w-full px-4 py-2" type="text" name="spread_id" id="spread_id" required />
			<button class="bg-slate-100 px-4 py-2" type="submit">Daftar</button>
		</div>
	</form>
{/if}

{#if spread}
	<section class="m-4 bg-white p-4">
		<div>
			<div class="m-2 text-xl font-bold">API KEY</div>
			<div class="flex">
				<input
					class="w-full bg-slate-200 px-4 py-2"
					type="text"
					value={spread?.api_key ?? ''}
					readonly
				/>
				<button
					value={spread?.api_key ?? ''}
					class="bg-slate-400 px-4 py-2 font-semibold text-white"
					type="button"
					on:click={copyTo}>Copy</button
				>
			</div>
		</div>
	</section>
{/if}
