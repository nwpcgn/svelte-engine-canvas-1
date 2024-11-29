<script>
	import { onMount } from 'svelte'
	import Loader from '../lib/canvas/Loader'
	export let name
	let state = {}
	let canvasHeight = 512
	let canvasWidth = 512
	let canvas
	let ctx

	onMount(async () => {
		ctx = canvas.getContext('2d')
		await Promise.all([
			Loader.loadImage('skyline', 'https://i.imgur.com/BnKl6FH.png'),
			Loader.loadImage('bg1', 'https://i.imgur.com/K1s8j8i.png'),
			Loader.loadImage('bg2', 'https://i.imgur.com/xIKquCf.png')
		])

		startGame()
	})
	function startGame() {
		// Reset game state
		state = {
			phase: 'aiming', // aiming | in flight | celebrating
			currentPlayer: 1,
			bomb: {
				x: undefined,
				y: undefined,
				rotation: 0,
				velocity: { x: 0, y: 0 }
			},

			// Buildings
			backgroundBuildings: [],
			buildings: [],
			blastHoles: []

			// ...
		}

		// Generate background buildings
		for (let i = 0; i < 11; i++) {
			generateBackgroundBuilding(i)
		}

		// Generate buildings
		for (let i = 0; i < 8; i++) {
			generateBuilding(i)
		}

		// ...

		initializeBombPosition()

		// ...

		draw()
	}

	function generateBackgroundBuilding(index) {
		// ...
	}

	function generateBuilding(index) {
		// ...
	}

	function initializeBombPosition() {
		// ...
	}

	function draw() {
		ctx.save()

		// Flip coordinate system upside down
		ctx.translate(0, canvasHeight)
		ctx.scale(1, -1)

		// Draw scene
		drawBackground()
		drawBackgroundBuildings()
		drawBuildings()
		drawGorilla(1)
		drawGorilla(2)
		drawBomb()

		// Restore transformation
		ctx.restore()
	}

	function drawBackground() {
		const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight)
		gradient.addColorStop(1, '#F8BA85')
		gradient.addColorStop(0, '#FFC28E')

		// Draw sky
		ctx.fillStyle = gradient
		ctx.fillRect(0, 0, canvasWidth, canvasHeight)

		// Draw moon
		ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
		ctx.beginPath()
		ctx.arc(300, 350, 60, 0, 2 * Math.PI)
		ctx.fill()
	}

	function drawBackgroundBuildings() {
		// ...
	}

	function drawBuildings() {
		// ...
	}

	function drawGorilla(player) {
		// ...
	}

	function drawBomb() {
		//...
	}

	// Event handlers
	// ...

	function throwBomb() {
		// ...
	}

	function animate(timestamp) {
		// ...
	}
</script>

<svelte:head><title>{name}</title></svelte:head>
<section class="layer center">
	<canvas bind:this={canvas} width={canvasWidth} height={canvasHeight} />
</section>
