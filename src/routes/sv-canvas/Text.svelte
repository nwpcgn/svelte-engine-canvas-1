<script>
	import { Layer } from 'svelte-canvas'
	import { spring } from 'svelte/motion'
	export let x, y, color
	let _x, _y

	// $: setup = ({ width, height }) => {
	// 	_x = spring(width * x, { stiffness: 0.15, damping: 0.2 })
	// 	_y = spring(height * y, { stiffness: 0.15, damping: 0.2 })
	// }

	$: render = ({ context,width,height }) => {
		// context.globalCompositeOperation = 'screen'
		// context.fillStyle = color
		// context.lineWidth = 10
		// context.beginPath()
		// context.arc($_x, $_y, $radius, 0, Math.PI * 2)
		// context.fill()
		// context.stroke()
	}


</script>

<Layer
	{render} />
