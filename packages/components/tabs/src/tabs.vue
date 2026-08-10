<template>
	<div class="idea-tabs">
		<div class="idea-tabs__nav" ref="navRef">
			<div
				v-for="(tab, index) in tabs"
				:key="tab.name"
				class="idea-tabs__item"
				:class="{ 'is-active': activeName === tab.name, 'is-disabled': tab.disabled }"
				@click="handleTabClick(tab)"
			>
				<slot name="label" :tab="tab" :index="index">
					<span>{{ tab.label }}</span>
				</slot>
			</div>
			<div class="idea-tabs__active-bar" :style="activeBarStyle" />
		</div>
		<div class="idea-tabs__content">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'

interface Tab {
	name: string
	label: string
	disabled?: boolean
}

interface Props {
	modelValue?: string
	tabs?: Tab[]
}

const props = withDefaults(defineProps<Props>(), {
	modelValue: '',
	tabs: () => [],
})

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
	(e: 'tabClick', tab: Tab): void
}>()

const navRef = ref<HTMLElement | null>(null)
const activeName = ref(props.modelValue || props.tabs[0]?.name || '')

const activeBarStyle = computed(() => {
	if (!navRef.value || !activeName.value) return {}
	const items = navRef.value.querySelectorAll('.idea-tabs__item')
	let left = 0
	let width = 0
	items.forEach((item) => {
		if (item.classList.contains('is-active')) {
			const rect = (item as HTMLElement).getBoundingClientRect()
			const navRect = navRef.value!.getBoundingClientRect()
			left = rect.left - navRect.left
			width = rect.width
		}
	})
	return {
		left: left + 'px',
		width: width + 'px',
	}
})

watch(() => props.modelValue, (val) => {
	if (val) activeName.value = val
})

function handleTabClick(tab: Tab) {
	if (tab.disabled) return
	activeName.value = tab.name
	emit('update:modelValue', tab.name)
	emit('tabClick', tab)
}

onMounted(() => {
	nextTick(() => {
		// Force update active bar
	})
})
</script>

<style scoped lang="less">
.idea-tabs {
	&__nav {
		position: relative;
		display: flex;
		border-bottom: 2px solid var(--idea-color-border-lighter, #EBEEF5);
		gap: 0;
	}

	&__item {
		padding: 12px 20px;
		cursor: pointer;
		font-size: 14px;
		color: var(--idea-color-text-regular, #606266);
		transition: color 0.3s;
		user-select: none;
		position: relative;

		&:hover {
			color: var(--idea-color-primary, #ED6F22);
		}

		&.is-active {
			color: var(--idea-color-primary, #ED6F22);
			font-weight: 500;
		}

		&.is-disabled {
			color: var(--idea-color-text-placeholder, #C0C4CC);
			cursor: not-allowed;
		}
	}

	&__active-bar {
		position: absolute;
		bottom: -2px;
		height: 2px;
		background: var(--idea-color-primary, #ED6F22);
		transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	&__content {
		padding: 16px 0;
	}
}
</style>