<script>
	import Bg2 from './Bg2.svelte'
	import Bg1 from './Bg1.svelte'
	import { Canvas, Layer } from 'svelte-canvas'
	import Loader from '../lib/canvas/Loader'
	export let name
	let cW = 1024
	let cH = 576
	let sW = 1150
	let sH = 646
</script>

<svelte:head><title>{name}</title></svelte:head>
<section class="layer center">
	<Canvas width={cW} height={cH}>
		<Bg1 />
	</Canvas>
</section>
