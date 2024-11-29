import { wrap } from 'svelte-spa-router/wrap'

// @index('./routes/*.svelte', f => `import ${f.name} from '${f.path}${f.ext}'`)
import Bg1 from './routes/Bg1.svelte'
import Bg2 from './routes/Bg2.svelte'
import Canvas1 from './routes/Canvas1.svelte'
import Canvas2 from './routes/Canvas2.svelte'
import Canvas3 from './routes/Canvas3.svelte'
import Canvas4 from './routes/Canvas4.svelte'
import Canvas5 from './routes/Canvas5.svelte'
import Canvas6 from './routes/Canvas6.svelte'
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
	},
	{
		name: 'Canvas 4',
		item: '/c4'
	},
	{
		name: 'Canvas 6',
		item: '/c6'
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
	'/c4': wrap({
		component: Canvas4,
		props: { name: 'Canvas 4', nav }
	}),
	'/c6': wrap({
		component: Canvas6,
		props: { name: 'Canvas 4', nav }
	}),
	'*': NotFound
}
