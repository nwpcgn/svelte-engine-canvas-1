<script>
	import { location } from 'svelte-spa-router'
	export let name = 'Name'
	export let nav = []
</script>

<svelte:head><title>{name}</title></svelte:head>

<section class="layer nwp">
	<article class="container">
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

			<div class="box center py-4">
		<svg
			width="672px"
			height="180px"
			viewBox="0 0 672 180"
			version="1.1"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg">
			<defs>
				<path d="M320 0L320 0L320 180L0 180L0 0L320 0Z" id="path_1" />
				<clipPath id="clip_1">
					<use xlink:href="#path_1" clip-rule="evenodd" fill-rule="evenodd" />
				</clipPath>
			</defs>
			<g id="gb-gray">
				<path
					d="M320 0L320 0L320 180L0 180L0 0L320 0Z"
					id="gb-gray"
					fill="none"
					stroke="none"
					transform="translate(352 0)" />
				<g id="gb-gray" clip-path="url(#clip_1)" transform="translate(352 0)">
					<path
						d="M0 0L80 0L80 180L0 180L0 0Z"
						id="gb-400"
						fill="#080808"
						fill-rule="evenodd"
						stroke="none" />
					<path
						d="M80 0L160 0L160 180L80 180L80 0Z"
						id="gb-300"
						fill="#585858"
						fill-rule="evenodd"
						stroke="none" />
					<path
						d="M160 0L240 0L240 180L160 180L160 0Z"
						id="gb-200"
						fill="#A8A8A8"
						fill-rule="evenodd"
						stroke="none" />
					<path
						d="M240 0L320 0L320 180L240 180L240 0Z"
						id="gb-100"
						fill="#F8F8F8"
						fill-rule="evenodd"
						stroke="none" />
				</g>
			</g>
			<g id="gb-green">
				<path
					d="M320 0L320 0L320 180L0 180L0 0L320 0Z"
					id="gb-green"
					fill="none"
					stroke="none" />
				<g id="gb" clip-path="url(#clip_1)">
					<path
						d="M0 0L80 0L80 180L0 180L0 0Z"
						id="gb-400"
						fill="#102000"
						fill-rule="evenodd"
						stroke="none" />
					<path
						d="M80 0L160 0L160 180L80 180L80 0Z"
						id="gb-300"
						fill="#306850"
						fill-rule="evenodd"
						stroke="none" />
					<path
						d="M160 0L240 0L240 180L160 180L160 0Z"
						id="gb-200"
						fill="#86C06C"
						fill-rule="evenodd"
						stroke="none" />
					<path
						d="M240 0L320 0L320 180L240 180L240 0Z"
						id="gb-100"
						fill="#E0F8CF"
						fill-rule="evenodd"
						stroke="none" />
				</g>
			</g>
		</svg>
	</div>
	</article>

</section>
