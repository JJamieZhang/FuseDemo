import Example from './Example';

export const ExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/example',
			component: Example
		}, {
			path: '/home',
			component: Example
		}, {
			path: '/analytics',
			component: Example
		}
	]
};
