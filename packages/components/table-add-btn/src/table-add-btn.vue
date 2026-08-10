<template>
	<div class="idea-table-add-btn" @click="handleClick">
		<span class="idea-table-add-btn__icon">+</span>
		<span>{{ text }}</span>
	</div>
</template>

<script setup lang="ts">
import { useLocale } from '@idea-ui/locale'

const { t } = useLocale()

interface Props {
	text?: string
}

const props = withDefaults(defineProps<Props>(), {
	text: '',
})

const emit = defineEmits<{
	(e: 'click'): void
}>()

const displayText = props.text || t('idea.add')

function handleClick() {
	emit('click')
}
</script>

<style scoped lang="less">
.idea-table-add-btn {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	padding: 6px 12px;
	border: 1px dashed var(--idea-color-border, #DCDFE6);
	border-radius: var(--idea-border-radius, 4px);
	color: var(--idea-color-primary, #ED6F22);
	cursor: pointer;
	font-size: 13px;
	transition: all 0.2s;

	&:hover {
		border-color: var(--idea-color-primary, #ED6F22);
		background: rgba(237, 111, 34, 0.04);
	}

	&__icon {
		font-size: 16px;
		font-weight: bold;
		line-height: 1;
	}
}
</style>