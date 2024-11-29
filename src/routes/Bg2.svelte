<script>
	import { Canvas, Layer } from 'svelte-canvas'
	import Loader from '../lib/canvas/Loader'
	let sW = 6912
	let sH = 640
	let imgW,
		imgH,
		aspectRatio,
		x1 = 0,
		y1 = 0

	setInterval(() => {
		x1 -= 1
	}, 500)

	$: render = ({ context, width, height }) => {
		Promise.all([Loader.loadImage('floor1', '/img/floor1.png')]).then((d) => {
			const img = Loader.getImage('floor1')
			aspectRatio = sH / sW
			imgW = Math.floor(sH / aspectRatio)
			imgH = Math.floor(sW * aspectRatio)
			y1 = height - imgH
			console.log({ aspectRatio, imgH, imgW, x1, y1 })
			context.drawImage(img, x1, y1, img.width, img.height, x1, y1, imgW, imgH)
		})
	}
</script>

<Layer {render} />
