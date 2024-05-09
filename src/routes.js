import { wrap } from 'svelte-spa-router/wrap'

// @index('./routes/*.svelte', f => `import ${f.name} from '${f.path}${f.ext}'`)
import Canvas1 from './routes/Canvas1.svelte'
import Canvas2 from './routes/Canvas2.svelte'
import Canvas3 from './routes/Canvas3.svelte'
import NotFound from './routes/NotFound.svelte'
import Start from './routes/Start.svelte'
// @endindex

export const nav = [
	{
		name: 'Start',
		item: '/'
	},
	{
		name: 'Canvas 1',
		item: '/c1'
	},
	{
		name: 'Canvas 2',
		item: '/c2'
	},
	{
		name: 'Canvas 3',
		item: '/c3'
	}
]

export const routes = {
	'/': wrap({
		component: Start,
		props: { name: 'Nwp-Studio', nav }
	}),
	'/c1': wrap({
		component: Canvas1,
		props: { name: 'Canvas 1', nav }
	}),
	'/c2': wrap({
		component: Canvas2,
		props: { name: 'Canvas 2', nav }
	}),
	'/c3': wrap({
		component: Canvas3,
		props: { name: 'Canvas 3', nav }
	}),
	'*': NotFound
}
