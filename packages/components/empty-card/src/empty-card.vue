<template>
	<div class="idea-empty-card">
		<div class="idea-empty-card__icon">
			<slot name="icon">
				<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="8" y="12" width="48" height="40" rx="4" stroke="#C0C4CC" stroke-width="2" fill="none"/>
					<rect x="16" y="20" width="32" height="4" rx="2" fill="#E4E7ED"/>
					<rect x="16" y="28" width="24" height="4" rx="2" fill="#E4E7ED"/>
					<rect x="16" y="36" width="16" height="4" rx="2" fill="#E4E7ED"/>
				</svg>
			</slot>
		</div>
		<div class="idea-empty-card__text">
			<slot>{{ displayText }}</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@idea-ui/locale'

const { t } = useLocale()

interface Props {
	text?: string
}

const props = withDefaults(defineProps<Props>(), {
	text: '',
})

const displayText = computed(() => props.text || t('idea.nodata'))
</script>

<style scoped lang="less">
.idea-empty-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40px 20px;
	min-height: 200px;

	&__icon {
		margin-bottom: 16px;
		opacity: 0.6;
	}

	&__text {
		font-size: 14px;
		color: var(--idea-color-text-secondary, #909399);
		text-align: center;
	}
}
</style>