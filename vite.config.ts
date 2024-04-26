import type { StorybookConfig } from '@storybook/react-vite'
import { withoutVitePlugins } from '@storybook/builder-vite'

const config: StorybookConfig = {
	stories: ['../ts/**/*.stories.mdx', '../ts/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-storysource',
		'storybook-dark-mode',
		{
			name: '@storybook/addon-styling',
			options: {
				postCss: true
			}
		}
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
// Remove the 'storyStoreV7' property
// features: {
//     storyStoreV7: true
// },
	typescript: {
		check: false
	},
	docs: {
		autodocs: true
	},
viteFinal: async config => {
	return { ...config, plugins: await withoutVitePlugins(config.plugins, ['node-externals']) }
	}
}

export default config