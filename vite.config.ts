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
			entry: {
				index: resolve(__dirname, 'packages/index.ts'),
				'locale/zh-cn': resolve(__dirname, 'packages/locale/zh-cn.ts'),
				'locale/zh-tw': resolve(__dirname, 'packages/locale/zh-tw.ts'),
				'locale/en': resolve(__dirname, 'packages/locale/en.ts'),
			},
			name: 'IdeaUI',
			fileName: (format, entryName) => `${entryName === 'index' ? 'idea-ui' : entryName}.${format === 'es' ? 'es' : 'umd'}.js`,
		},
		rollupOptions: {
			external: ['vue', 'element-plus'],
			output: {
				globals: {
					vue: 'Vue',
					'element-plus': 'ElementPlus',
				},
			},
		},
	},
})
