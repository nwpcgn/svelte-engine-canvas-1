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

<nav class="navbar navbar-expand sticky-top bg-dark px-4" data-bs-theme="dark">
	<a class="navbar-brand" href="#/">NwpStudio</a>
	<button
		class="navbar-toggler d-lg-none"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#collapsibleNavId"
		aria-controls="collapsibleNavId"
		aria-expanded="false"
		aria-label="Toggle navigation" />
	<div class="collapse navbar-collapse" id="collapsibleNavId">
		<ul class="navbar-nav ms-auto">
			<li class="nav-item">
				<a class="nav-link" href="#/"
					>Canvas <span class="visually-hidden">(current)</span></a>
			</li>
		</ul>
	</div>
</nav>

<main bind:this={elem} class="main">
	{#await promise then _}
		<Router {routes} />
	{/await}
</main>
<SvgSprites />
