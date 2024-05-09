class AssetLoader {
	constructor() {
		this.images = {}
	}

	loadImage(key, src) {
		const img = new Image()
		const d = new Promise(
			function (resolve, reject) {
				img.onload = function () {
					this.images[key] = img
					resolve(img)
				}.bind(this)

				img.onerror = function () {
					reject('Could not load image: ' + src)
				}
			}.bind(this)
		)

		img.src = src
		return d
	}

	getImage(key) {
		return key in this.images ? this.images[key] : null
	}
}
export const Loader = new AssetLoader()

export default Loader

// export class Hero {
// 	constructor(map, x, y, spriteX, spriteY, spriteWidth, spriteHeight) {
// 		this.map = map
// 		this.x = x
// 		this.y = y
// 		this.width = map.heroSize
// 		this.height = map.heroSize
// 		this.spriteX = spriteX
// 		this.spriteY = spriteY
// 		this.spriteWidth = spriteWidth
// 		this.spriteHeight = spriteHeight
// 		this.image = Loader.getImage('character')
// 		this.speed = 256
// 	}

// 	move(delta, dirx, diry) {
// 		this.x += dirx * this.speed * delta
// 		this.y += diry * this.speed * delta

// 		// check if we walked into a non-walkable tile
// 		this._collide(dirx, diry)

// 		// clamp values
// 		let maxX = this.map.cols * this.map.tsize - 16
// 		let maxY = this.map.rows * this.map.tsize - 16
// 		// console.log({maxX,maxY, x: this.x, y: this.y});
// 		this.x = Math.max(0, Math.min(this.x, maxX))
// 		this.y = Math.max(0, Math.min(this.y, maxY))
// 	}
// 	_collide(dirx, diry) {
// 		let row, col
// 		// -1 in right and bottom is because image ranges from 0..63
// 		// and not up to 64
// 		let left = this.x - this.width / 2
// 		let right = this.x + this.width / 2 - 1
// 		let top = this.y - this.height / 2
// 		let bottom = this.y + this.height / 2 - 1

// 		// check for collisions on sprite sides
// 		let collision =
// 			this.map.isSolidTileAtXY(left, top) ||
// 			this.map.isSolidTileAtXY(right, top) ||
// 			this.map.isSolidTileAtXY(right, bottom) ||
// 			this.map.isSolidTileAtXY(left, bottom)
// 		if (!collision) {
// 			return
// 		}

// 		if (diry > 0) {
// 			row = this.map.getRow(bottom)
// 			this.y = -this.height / 2 + this.map.getY(row)
// 		} else if (diry < 0) {
// 			row = this.map.getRow(top)
// 			this.y = this.height / 2 + this.map.getY(row + 1)
// 		} else if (dirx > 0) {
// 			col = this.map.getCol(right)
// 			this.x = -this.width / 2 + this.map.getX(col)
// 		} else if (dirx < 0) {
// 			col = this.map.getCol(left)
// 			this.x = this.width / 2 + this.map.getX(col + 1)
// 		}
// 	}
// }
