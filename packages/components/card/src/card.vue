<template>
	<div class="idea-card" :class="{ 'idea-card--shadow': shadow }">
		<div class="idea-card__header" v-if="$slots.header || title">
			<slot name="header">
				<span class="idea-card__title">{{ title }}</span>
			</slot>
		</div>
		<div class="idea-card__body">
			<slot />
		</div>
		<div class="idea-card__footer" v-if="$slots.footer">
			<slot name="footer" />
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	title?: string
	shadow?: boolean
}

withDefaults(defineProps<Props>(), {
	title: '',
	shadow: true,
})
</script>

<style scoped lang="less">
.idea-card {
	background: var(--idea-bg-color-overlay, #fff);
	border: 1px solid var(--idea-color-border-lighter, #EBEEF5);
	border-radius: var(--idea-border-radius, 4px);

	&--shadow {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
	}

	&__header {
		padding: 16px 20px;
		border-bottom: 1px solid var(--idea-color-border-lighter, #EBEEF5);
	}

	&__title {
		font-size: 16px;
		font-weight: 600;
		color: var(--idea-color-text-primary, #303133);
	}

	&__body {
		padding: 20px;
	}

	&__footer {
		padding: 12px 20px;
		border-top: 1px solid var(--idea-color-border-lighter, #EBEEF5);
	}
}
</style>