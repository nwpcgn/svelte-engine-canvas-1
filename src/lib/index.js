import { writable, derived } from 'svelte/store'

export const iconlist = writable([])
export const theme = writable('dim')
export const stage = writable()
export const canvas = derived(stage, ($stage, set) => {
	if (!$stage) return
	const ro = new ResizeObserver(([entry]) => {
		let width = Math.floor(entry.contentRect.width),
			height = Math.floor(entry.contentRect.height),
			offsetY = Math.floor(entry.contentRect.top)
		set({ width, height, offsetY })
	})
	ro.observe($stage)
	return () => ro.disconnect()
})
export const sleep = (milliseconds = 1000) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds))

// export const gArr = (int = 1) => Array.from({ length: int }, (_, i) => i + 1)

/* export function paginate(arr, size) {
	return arr.reduce((acc, val, i) => {
		let idx = Math.floor(i / size)
		let page = acc[idx] || (acc[idx] = [])
		page.push(val)

		return acc
	}, [])
} */
export function clickOutside(node) {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node))
		}
	}

	document.addEventListener('click', handleClick, true)

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true)
		}
	}
}
export async function fetchData(url) {
	try {
		const res = await fetch(url)
		const data = await res.json()
		return data
	} catch (error) {
		throw new Error(error)
	}
}
export function copyToClip(text) {
	// const text = "Example text to appear on clipboard";
	return navigator.clipboard.writeText(text).then(
		function () {
			console.log('Copying to clipboard was successful!', text.length)
		},
		function (err) {
			console.error('Async: Could not copy text: ', err)
		}
	)
}
export const randInt = (min, max) => Math.random() * (max - min) + min
export const randNum = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
}
/* export const shuffle = (array) => {
	let currentIndex = array.length
	let temporaryValue, randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
} */
/* export function uuidv4() {
	return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	)
} */
// export const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
