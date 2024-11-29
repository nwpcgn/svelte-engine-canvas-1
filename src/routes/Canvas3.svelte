<script>
	import { Canvas, Layer } from 'svelte-canvas'
	import { tweened } from 'svelte/motion'
	import { quadOut as easing } from 'svelte/easing'
	import Bg from './sv-canvas/Bg.svelte'
	import BgImage from './sv-canvas/BgImage.svelte'
	export let name
	const position = tweened([0.5, 0.5], { duration: 400, easing })
	const colors = {
		gb: {
			'100': '#E0F8CF',
			'200': '#86C06C',
			'300': '#306850',
			'400': '#102000'
		},
		'gb-gray': {
			'100': '#F8F8F8',
			'200': '#A8A8A8',
			'300': '#585858',
			'400': '#080808'
		}
	}

	$: render = ({ context, width, height }) => {
		// const [x, y] = $position
		// context.fillStyle = colors.gb['300']
		// context.beginPath()
		// context.arc(x * width, y * height, 20, 0, 2 * Math.PI)
		// context.fill()
	}
</script>

<svelte:head><title>{name}</title></svelte:head>
<section class="layer center">
	<Canvas width={512} height={512}>
		<Bg color={colors.gb['100']} />
		<BgImage />
	</Canvas>
</section>
