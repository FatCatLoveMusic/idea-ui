<template>
	<div class="demo-page">
		<h2>{{ t('icons.title') }}</h2>
		<p class="demo-desc">{{ t('icons.desc') }}</p>

		<div class="demo-section">
			<h3>{{ t('icons.usage') }}</h3>
			<div class="demo-block">
				<p class="usage-tip">{{ t('icons.usageTip') }}</p>
				<pre class="usage-code">&lt;i class="icon-shouye"&gt;&lt;/i&gt;</pre>
			</div>
		</div>

		<div class="demo-section">
			<h3>{{ t('icons.allIcons') }} ({{ filteredGlyphs.length }})</h3>
			<div class="search-box">
				<input
					v-model="searchText"
					:placeholder="t('icons.searchPlaceholder')"
					class="search-input"
				/>
			</div>
			<div class="icon-grid">
				<div
					v-for="glyph in filteredGlyphs"
					:key="glyph.font_class"
					class="icon-item"
					@click="copyIcon(glyph.font_class)"
				>
					<i :class="'icon-' + glyph.font_class" class="icon-show"></i>
					<span class="icon-name">{{ glyph.font_class }}</span>
					<span class="icon-label">{{ glyph.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { t } from '../../locale'
import iconData from '../../../../packages/theme-chalk/src/sapi-fonts/iconfont.json'

const glyphs = iconData.glyphs as Array<{ name: string; font_class: string; unicode: string }>

const searchText = ref('')

const filteredGlyphs = computed(() => {
	if (!searchText.value.trim()) {
		return glyphs
	}
	const keyword = searchText.value.toLowerCase()
	return glyphs.filter(
		(g) =>
			g.font_class.toLowerCase().includes(keyword) ||
			g.name.toLowerCase().includes(keyword)
	)
})

function copyIcon(fontClass: string) {
	const code = `<i class="icon-${fontClass}"></i>`
	navigator.clipboard.writeText(code).catch(() => {
		const textarea = document.createElement('textarea')
		textarea.value = code
		textarea.style.position = 'fixed'
		textarea.style.opacity = '0'
		document.body.appendChild(textarea)
		textarea.select()
		document.execCommand('copy')
		document.body.removeChild(textarea)
	})
	ElMessage.success(t('icons.copied'))
}
</script>

<style scoped lang="less">
.usage-tip {
	font-size: 14px;
	color: var(--idea-color-text-regular);
	margin-bottom: 12px;
}

.usage-code {
	background: #f5f7fa;
	padding: 12px 16px;
	border-radius: 4px;
	font-size: 13px;
	color: #e6a23c;
	font-family: 'Courier New', Courier, monospace;
}

.search-box {
	margin-bottom: 16px;
}

.search-input {
	width: 100%;
	max-width: 360px;
	padding: 8px 12px;
	border: 1px solid var(--idea-color-border);
	border-radius: 4px;
	font-size: 14px;
	color: var(--idea-color-text-regular);
	outline: none;
	transition: border-color 0.2s;

	&:focus {
		border-color: var(--idea-color-primary);
	}
}

.icon-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
	gap: 12px;
}

.icon-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 8px;
	background: #fff;
	border: 1px solid #e4e7ed;
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		border-color: var(--idea-color-primary);
		box-shadow: 0 2px 8px rgba(237, 111, 34, 0.12);
		transform: translateY(-2px);
	}
}

.icon-show {
	font-size: 28px;
	color: #606266;
	margin-bottom: 8px;
}

.icon-name {
	font-size: 12px;
	color: #909399;
	margin-bottom: 2px;
	word-break: break-all;
	text-align: center;
}

.icon-label {
	font-size: 11px;
	color: #c0c4cc;
	text-align: center;
}

</style>
