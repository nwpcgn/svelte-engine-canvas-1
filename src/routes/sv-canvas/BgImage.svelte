<script>
	import { Layer } from 'svelte-canvas'
	import { spring } from 'svelte/motion'
	import Loader from '../../lib/canvas/Loader'
	export let x, y, color
	let _x, _y

	// $: setup = ({ width, height }) => {
	// 	_x = spring(width * x, { stiffness: 0.15, damping: 0.2 })
	// 	_y = spring(height * y, { stiffness: 0.15, damping: 0.2 })
	// }

	$: render = ({ context, width, height }) => {
		// if (color) {
		// 	context.fillStyle = color
		// 	context.fillRect(0, 0, width, height)
		// }
		Promise.all([
			Loader.loadImage('textwin', '/img/window-framed.png'),
			Loader.loadImage('player', '/img/gb-stat-player.png'),
			Loader.loadImage('oppo', '/img/gb-stat-opponent.png')
		]).then(() => {
			const image = Loader.getImage('textwin')
			const dWidth = 512
			const dHeight = 110
			const dx = 0
			const dy = height - dHeight
			context.drawImage(image, dx, dy, dWidth, dHeight)
			const image2 = Loader.getImage('player')
			const dWidth2 = 476
			const dHeight2 = 96
			const dx2 = 18
			const dy2 = 10
			context.drawImage(image2, dx2, dy2, dWidth2, dHeight2)
			const image3 = Loader.getImage('oppo')
			context.drawImage(image3, dx2, dy2 + dHeight2 + 20, dWidth2, dHeight2)
		})
	}
</script>

<Layer {render} />
