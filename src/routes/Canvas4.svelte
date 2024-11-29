<script>
	import { Canvas } from 'svelte-canvas'
	import Ball from './sv-canvas/Ball.svelte'
	export let name
	let balls = [
		{ color: 'tomato', x: 0.5, y: 0.333 },
		{ color: 'goldenrod', x: 0.333, y: 0.625 },
		{ color: 'mediumturquoise', x: 0.667, y: 0.625 }
	]

	const reorder = (color) => {
		balls = balls
			.filter((c) => c.color !== color)
			.concat(balls.filter((c) => c.color === color))
	}
</script>

<svelte:head><title>{name}</title></svelte:head>
<section class="layer center">
	<div class="border border-danger">
		<Canvas width={512} height={512} layerEvents>
			{#each balls as { color, x, y } (color)}
				<Ball
					{color}
					{x}
					{y}
					on:mousedown={() => reorder(color)}
					on:touchstart={() => reorder(color)} />
			{/each}
		</Canvas>
	</div>
</section>
