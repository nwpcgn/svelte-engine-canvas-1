<script>
	import Switch from '../lib/ThemeSwitch.svelte'
	import { location } from 'svelte-spa-router'
	export let name = 'Name'
	export let sub = ''
	export let nav = []
</script>

<svelte:head><title>nwp-studio</title></svelte:head>

<section class="layer nwp">
	<article class="content">
		<header>
			<h1>{name}</h1>
		</header>

		<nav class="flex-bar">
			{#each nav as { name, item }}
				{#if item !== $location}
					<a href="#{item}" class="button">{name}</a>
				{/if}
			{/each}
		</nav>
	</article>
	<article class="content nwp-header">
		<h3>Theme</h3>
		<Switch />
	</article>
</section>
