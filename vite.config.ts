import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [
		vue(),
		dts({
			include: ['packages'],
			outDir: 'dist',
			clearPureImport: true,
		}),
	],
	resolve: {
		alias: {
			'@idea-ui': resolve(__dirname, 'packages'),
		},
	},
	build: {
		outDir: 'dist',
		lib: {
			entry: resolve(__dirname, 'packages/index.ts'),
			name: 'IdeaUI',
			fileName: (format) => `idea-ui.${format === 'es' ? 'es' : 'umd'}.js`,
		},
		rollupOptions: {
			external: ['vue', 'element-plus'],
			output: {
				globals: {
					vue: 'Vue',
					'element-plus': 'ElementPlus',
				},
				preserveModules: false,
			},
		},
	},
})
