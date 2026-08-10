<template>
	<div class="idea-divider-line" :class="[`idea-divider-line--${direction}`]">
		<span v-if="text && $slots.default === undefined" class="idea-divider-line__text">{{ text }}</span>
		<span v-if="$slots.default" class="idea-divider-line__text"><slot /></span>
	</div>
</template>

<script setup lang="ts">
interface Props {
	text?: string
	direction?: 'horizontal' | 'vertical'
}

withDefaults(defineProps<Props>(), {
	text: '',
	direction: 'horizontal',
})
</script>

<style scoped lang="less">
.idea-divider-line {
	display: flex;
	align-items: center;
	color: var(--idea-color-text-placeholder, #C0C4CC);

	&--horizontal {
		width: 100%;
		border-top: 1px solid var(--idea-color-border-lighter, #EBEEF5);
		margin: 16px 0;

		.idea-divider-line__text {
			padding: 0 12px;
			background: var(--idea-bg-color, #fff);
			font-size: 13px;
			transform: translateY(-50%);
		}
	}

	&--vertical {
		display: inline-flex;
		height: 1em;
		border-left: 1px solid var(--idea-color-border-lighter, #EBEEF5);
		margin: 0 8px;
		vertical-align: middle;
	}
}
</style>