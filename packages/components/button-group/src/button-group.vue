<template>
	<div class="idea-button-group">
		<div
			v-for="btn in buttons"
			:key="btn.value"
			class="idea-button-group__btn"
			:class="{ 'is-active': modelValue === btn.value, 'is-disabled': btn.disabled }"
			@click="handleClick(btn)"
		>
			<slot name="item" :item="btn">
				<span>{{ btn.label }}</span>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
interface ButtonItem {
	label: string
	value: string | number
	disabled?: boolean
}

interface Props {
	modelValue?: string | number
	buttons?: ButtonItem[]
}

withDefaults(defineProps<Props>(), {
	modelValue: '',
	buttons: () => [],
})

const emit = defineEmits<{
	(e: 'update:modelValue', value: string | number): void
	(e: 'change', value: string | number): void
}>()

function handleClick(btn: ButtonItem) {
	if (btn.disabled) return
	emit('update:modelValue', btn.value)
	emit('change', btn.value)
}
</script>

<style scoped lang="less">
.idea-button-group {
	display: inline-flex;
	border-radius: var(--idea-border-radius, 4px);
	overflow: hidden;

	&__btn {
		padding: 8px 16px;
		font-size: 14px;
		cursor: pointer;
		color: var(--idea-color-text-regular, #606266);
		background: #fff;
		border: 1px solid var(--idea-color-border, #DCDFE6);
		transition: all 0.2s;
		user-select: none;

		&:not(:first-child) {
			margin-left: -1px;
		}

		&:first-child {
			border-radius: var(--idea-border-radius, 4px) 0 0 var(--idea-border-radius, 4px);
		}

		&:last-child {
			border-radius: 0 var(--idea-border-radius, 4px) var(--idea-border-radius, 4px) 0;
		}

		&:hover:not(.is-disabled):not(.is-active) {
			color: var(--idea-color-primary, #ED6F22);
			border-color: var(--idea-color-primary, #ED6F22);
			z-index: 1;
		}

		&.is-active {
			background: var(--idea-color-primary, #ED6F22);
			border-color: var(--idea-color-primary, #ED6F22);
			color: #fff;
			z-index: 1;
		}

		&.is-disabled {
			color: var(--idea-color-text-placeholder, #C0C4CC);
			cursor: not-allowed;
			background: var(--idea-color-border-extra-light, #F2F6FC);
		}
	}
}
</style>