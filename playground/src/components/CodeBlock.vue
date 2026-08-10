<template>
	<div class="code-block">
		<div class="code-block__header">
			<span class="code-block__lang">{{ lang.toUpperCase() }}</span>
			<button class="code-block__copy" @click="copyCode">
				<svg v-if="copied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
				<svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
				</svg>
			</button>
		</div>
		<pre class="code-block__pre"><code :class="`language-${lang}`" v-html="highlightedCode"></code></pre>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import hljs from 'highlight.js'
import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('vue', xml)

const props = withDefaults(defineProps<{
	code: string
	lang?: string
}>(), {
	lang: 'html'
})

const copied = ref(false)

const highlightedCode = computed(() => {
	const language = props.lang === 'vue' ? 'xml' : props.lang
	return hljs.highlight(props.code.trim(), { language }).value
})

const copyCode = async () => {
	try {
		await navigator.clipboard.writeText(props.code.trim())
		copied.value = true
		setTimeout(() => {
			copied.value = false
		}, 2000)
	} catch {
		console.error('Failed to copy')
	}
}
</script>

<style lang="less" scoped>
.code-block {
	background: #1e1e1e;
	border-radius: 8px;
	overflow: hidden;
	margin-top: 12px;

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 16px;
		background: #2d2d2d;
		border-bottom: 1px solid #3d3d3d;
	}

	&__lang {
		font-size: 12px;
		color: #909399;
		text-transform: uppercase;
	}

	&__copy {
		background: transparent;
		border: none;
		cursor: pointer;
		color: #909399;
		padding: 4px;
		border-radius: 4px;
		transition: all 0.2s;

		&:hover {
			color: #fff;
			background: rgba(255, 255, 255, 0.1);
		}
	}

	&__pre {
		margin: 0;
		padding: 16px;
		overflow-x: auto;
		max-height: 600px;
		overflow-y: auto;

		code {
			font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
			font-size: 13px;
			line-height: 1.6;
			color: #d4d4d4;
		}
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
</style>