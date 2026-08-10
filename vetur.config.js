// Vetur 配置：让 Vetur 使用项目内的 TypeScript 与 tsconfig，
// 解决 Vue 3 项目中 import 行被误报 "Cannot find module" 的问题。
// 参考：https://vuejs.github.io/vetur/guide/setup.html
module.exports = {
	settings: {
		// 使用项目内的 typescript / vue-language-server，而非 Vetur 自带的旧版本
		'vetur.useWorkspaceDependencies': true,
	},
	projects: [
		{
			root: './',
			tsconfig: './tsconfig.json',
		},
	],
}
