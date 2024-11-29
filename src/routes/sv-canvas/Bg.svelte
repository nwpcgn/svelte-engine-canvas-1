<script>
	import { Layer } from 'svelte-canvas'
	import { spring } from 'svelte/motion'
	export let x, y, color
	let _x, _y

	// $: setup = ({ width, height }) => {
	// 	_x = spring(width * x, { stiffness: 0.15, damping: 0.2 })
	// 	_y = spring(height * y, { stiffness: 0.15, damping: 0.2 })
	// }

	$: render = ({ context, width, height }) => {
		if (color) {
			context.fillStyle = color
			context.fillRect(0, 0, width, height)
		}
	}
</script>

<Layer {render} />
