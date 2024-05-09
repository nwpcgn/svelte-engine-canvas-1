<script>
	import { sleep } from './lib'
	import { stage, frame, width, height } from './lib/canvas/game'
	import SvgSprites from './lib/SvgSprites.svelte'
	import Router from 'svelte-spa-router'
	import { routes } from './routes'
	import { onMount } from 'svelte'
	let elem
	let promise

	onMount(() => {
		promise = sleep(1000)
		stage.set(elem)
	})
</script>

<main bind:this={elem} class="main">
	{#await promise then _}
		<Router {routes} />
	{/await}
</main>
<SvgSprites />
