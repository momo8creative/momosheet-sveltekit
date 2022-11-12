<script>
	import '../app.css'
	export let data
</script>

<svelte:head>
	<title>{data?.title}</title>
</svelte:head>

<header class="bg-white p-4">
	<a class="text-3xl font-bold uppercase" href="/">Momo Sheet</a>
</header>

<slot />
