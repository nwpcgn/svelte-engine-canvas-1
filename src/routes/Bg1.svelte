<script>
	import { Canvas, Layer } from 'svelte-canvas'
	import Loader from '../lib/canvas/Loader'
	let cW = 1024
	let cH = 576
	let sW = 1150
	let sH = 646

    var aspectRatio =  sH / sW;
    let imgW = Math.floor(cH / aspectRatio)
    let imgH = Math.floor(cW * aspectRatio)

	$: render = ({ context, width, height }) => {
		Promise.all([
			Loader.loadImage('bg1', '/img/bg1.png'),
			Loader.loadImage('bg2', '/img/bg2.png'),
			Loader.loadImage('bg3', '/img/bg3.png'),
			Loader.loadImage('bg4', '/img/bg4.png'),
			Loader.loadImage('bg5', '/img/bg5.png')
		]).then(d => {
            context.drawImage(Loader.getImage('bg1'), 0, 0, sW, sH, 0, 0, imgW, imgH)
            context.drawImage(Loader.getImage('bg2'), 0, 0, sW, sH, 0, 0, imgW, imgH)
            context.drawImage(Loader.getImage('bg3'), 0, 0, sW, sH, 0, 0, imgW, imgH)
            context.drawImage(Loader.getImage('bg4'), 0, 0, sW, sH, 0, 0, imgW, imgH)
            context.drawImage(Loader.getImage('bg5'), 0, 0, sW, sH, 0, 0, imgW, imgH)
        })
	}
</script>

<Layer {render} />

