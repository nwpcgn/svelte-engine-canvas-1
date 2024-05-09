import { getContext, onMount, onDestroy } from 'svelte'
import { writable, derived } from 'svelte/store'

// Some props for the app
// export const width = writable(window.innerWidth);
// export const height = writable(window.innerHeight);
export const stage = writable()
export const frame = derived(stage, ($stage, set) => {
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
export const resetW = 512
export const resetH = 512
export const width = writable(resetW)
export const height = writable(resetH)
export const pixelRatio = writable(window.devicePixelRatio)
export const context = writable()
export const canvas = writable()
export const time = writable(0)

// A more convenient store for grabbing all game props
export const props = deriveObject({
	context,
	canvas,
	width,
	height,
	pixelRatio,
	time
})

export const key = Symbol()

export const getState = () => {
	const api = getContext(key)
	return api.getState()
}

export const renderable = (render) => {
	const api = getContext(key)
	const element = {
		ready: false,
		mounted: false
	}
	if (typeof render === 'function') element.render = render
	else if (render) {
		if (render.render) element.render = render.render
		if (render.setup) element.setup = render.setup
	}
	api.add(element)
	onMount(() => {
		element.mounted = true
		return () => {
			api.remove(element)
			element.mounted = false
		}
	})
}

function deriveObject(obj) {
	const keys = Object.keys(obj)
	const list = keys.map((key) => {
		return obj[key]
	})
	return derived(list, (array) => {
		return array.reduce((dict, value, i) => {
			dict[keys[i]] = value
			return dict
		}, {})
	})
}
