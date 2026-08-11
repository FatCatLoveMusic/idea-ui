<template>
	<div class="demo-block-container">
		<div class="demo-block">
			<slot />
		</div>

		<div class="demo-block-actions">
			<el-button @click="showCode = !showCode">
				<span class="btn-icon">{{ showCode ? '▲' : '▼' }}</span>
				{{ showCode ? t('common.code.hide') : t('common.code.show') }}
			</el-button>
		</div>

		<div class="code-panel" :class="{ 'is-expanded': showCode }">
			<div class="code-panel-header">
				<div class="lang-tabs">
					<button
						class="lang-tab"
						:class="{ active: activeLang === 'ts' }"
						@click="activeLang = 'ts'"
					>
						TypeScript
					</button>
					<button
						class="lang-tab"
						:class="{ active: activeLang === 'js' }"
						@click="activeLang = 'js'"
					>
						JavaScript
					</button>
				</div>
				<button class="copy-btn" @click="copyCode">
					<svg v-if="copied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
					<svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
						<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
					</svg>
					<span>{{ copied ? t('common.code.copied') : t('common.code.copy') }}</span>
				</button>
			</div>
			<div class="code-panel-body">
				<div class="code-wrapper">
					<div class="line-numbers">
						<span v-for="n in lineCount" :key="n" class="line-number">{{ n }}</span>
					</div>
					<pre class="code-pre"><code :class="`language-${highlightLang}`" v-html="highlightedCode"></code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import hljs from 'highlight.js'
import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import { t } from '../locale'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('vue', xml)

const props = withDefaults(defineProps<{
	codeTs: string
	codeJs: string
}>(), {
	codeTs: '',
	codeJs: '',
})

const showCode = ref(false)
const activeLang = ref<'ts' | 'js'>('ts')
const copied = ref(false)

const currentCode = computed(() => {
	return activeLang.value === 'ts' ? props.codeTs : props.codeJs
})

const highlightedCode = computed(() => {
	const lang = activeLang.value === 'ts' ? 'typescript' : 'javascript'
	return hljs.highlight(currentCode.value.trim(), { language: lang }).value
})

const lineCount = computed(() => {
	return currentCode.value.trim().split('\n').length
})

const highlightLang = computed(() => {
	return activeLang.value === 'ts' ? 'typescript' : 'javascript'
})

const copyCode = async () => {
	try {
		await navigator.clipboard.writeText(currentCode.value.trim())
		copied.value = true
		setTimeout(() => {
			copied.value = false
		}, 2000)
	} catch {
		console.error('Failed to copy')
	}
}
</script>

<style scoped lang="less">
.demo-block-container {
	display: flex;
	flex-direction: column;
	gap: 0;
}

.demo-block {
	padding: 24px;
	border: 1px solid #dcdfe6;
	border-radius: 8px 8px 0 0;
	background: #fff;
	margin-bottom: 0;
	transition: box-shadow 0.2s ease;

	&:hover {
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
	}
}

.demo-block-actions {
	display: flex;
	justify-content: flex-end;
	padding: 12px 24px;
	background: #f5f7fa;
	border: 1px solid #dcdfe6;
	border-top: none;
	border-radius: 0 0 8px 8px;
}

.code-panel {
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.25s ease;
	border: 1px solid transparent;
	border-top: none;
	border-radius: 0 0 8px 8px;

	&.is-expanded {
		max-height: 800px;
		border-color: #dcdfe6;
	}
}

.code-panel-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 16px;
	background: #2d2d2d;
	border-bottom: 1px solid #3d3d3d;
}

.lang-tabs {
	display: flex;
	gap: 0;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 4px;
	padding: 2px;
}

.lang-tab {
	padding: 4px 12px;
	font-size: 12px;
	color: #909399;
	background: transparent;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		color: #fff;
	}

	&.active {
		color: #fff;
		background: #409eff;
	}
}

.copy-btn {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	padding: 4px 8px;
	font-size: 12px;
	color: #909399;
	background: transparent;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		color: #fff;
		background: rgba(255, 255, 255, 0.1);
	}
}

.code-panel-body {
	background: #1e1e1e;
	max-height: 500px;
	overflow: auto;
}

.code-wrapper {
	display: flex;
	min-width: fit-content;
}

.line-numbers {
	display: flex;
	flex-direction: column;
	padding: 16px 8px;
	background: #1e1e1e;
	border-right: 1px solid #3d3d3d;
	user-select: none;
	min-width: 40px;
	text-align: right;
}

.line-number {
	font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
	font-size: 13px;
	line-height: 1.6;
	color: #6b6b6b;
}

.code-pre {
	margin: 0;
	padding: 16px;
	overflow-x: auto;

	code {
		font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
		font-size: 13px;
		line-height: 1.6;
		color: #d4d4d4;
	}
}

:deep(.hljs) {
	background: transparent !important;
}

:deep(.hljs-keyword),
:deep(.hljs-selector-tag),
:deep(.hljs-built_in),
:deep(.hljs-name),
:deep(.hljs-tag) {
	color: #569cd6;
}

:deep(.hljs-string),
:deep(.hljs-title),
:deep(.hljs-section),
:deep(.hljs-attribute),
:deep(.hljs-literal),
:deep(.hljs-template-tag),
:deep(.hljs-template-variable),
:deep(.hljs-type),
:deep(.hljs-addition) {
	color: #ce9178;
}

:deep(.hljs-comment),
:deep(.hljs-deletion),
:deep(.hljs-meta) {
	color: #6a9955;
}

:deep(.hljs-number),
:deep(.hljs-regexp),
:deep(.hljs-literal),
:deep(.hljs-bullet),
:deep(.hljs-link) {
	color: #b5cea8;
}

:deep(.hljs-function),
:deep(.hljs-title.function_) {
	color: #dcdcaa;
}

:deep(.hljs-variable),
:deep(.hljs-params) {
	color: #9cdcfe;
}

:deep(.hljs-attr) {
	color: #9cdcfe;
}

:deep(.hljs-punctuation) {
	color: #d4d4d4;
}

@media (max-width: 768px) {
	.demo-block {
		padding: 16px;
	}

	.demo-block-actions {
		padding: 8px 16px;
		justify-content: center;
	}

	.lang-tabs {
		flex-wrap: wrap;
	}

	.lang-tab {
		padding: 4px 8px;
		font-size: 11px;
	}

	.copy-btn span {
		display: none;
	}

	.line-numbers {
		min-width: 30px;
		padding: 12px 4px;
	}

	.line-number {
		font-size: 11px;
	}

	.code-pre {
		padding: 12px;

		code {
			font-size: 11px;
		}
	}
}
</style>
