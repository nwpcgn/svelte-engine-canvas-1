<script>
	import { sleep } from '../lib'
	import { width, height, frame } from '../lib/canvas/game'
	import Canvas from '../lib/canvas/Canvas.svelte'
	import Background from '../lib/canvas/Background.svelte'
	import DotGrid from '../lib/canvas/DotGrid.svelte'
	import Character from '../lib/canvas/Character.svelte'
	import Text from '../lib/canvas/Text.svelte'
	import FPS from '../lib/canvas/FPS.svelte'
	const colors = {
		gb: {
			'100': '#B8F878',
			'200': '#80B050',
			'300': '#486828',
			'400': '#102000'
		},
		'gb-gray': {
			'100': '#F8F8F8',
			'200': '#A8A8A8',
			'300': '#585858',
			'400': '#080808'
		}
	}

	let fontSize = 12
	let offsetY = 100
	let y2 = $height - offsetY
	let y1 = $height - offsetY - fontSize
	let maxW = 500
	let setup = {
		msg1: {
			fontSize,
			color: colors.gb['300'],
			align: 'left',
			baseline: 'top',
			maxW,
			x: 0,
			y: y1
		},
		msg2: {
			fontSize,
			color: colors.gb['300'],
			align: 'left',
			baseline: 'top',
			maxW: maxW,
			x: 0,
			y: y2
		}
	}
	const init = async () => {
		await sleep(1222)
		width.set($frame.width)
		height.set($frame.height)
		console.log('init')
		console.log($frame.width)
	}

	init()
</script>

{#await init()}
	<section class="layer center nwp">
		<div class="d-flex justify-content-center align-items-center">
			<div class="spinner-grow text-primary spinner-border-lg" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</section>
{:then __}
	<Canvas>
		<Background color="hsl(0, 0%, 10%)">
			<DotGrid divisions={30} color="hsla(0, 0%, 100%, 0.5)" />
		</Background>
		<Character size={10} />
		<Text
			text="Click and drag around the page to move the character."
			fontSize={12}
			align="right"
			baseline="bottom"
			x={$width - 20}
			y={$height - 20} />
		<FPS />
	</Canvas>
{/await}
