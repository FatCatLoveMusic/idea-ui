<template>
	<nav class="idea-breadcrumb" aria-label="Breadcrumb">
		<template v-for="(item, index) in items" :key="index">
			<span
				class="idea-breadcrumb__item"
				:class="{
					'is-link': !!item.path && index < items.length - 1,
					'is-current': index === items.length - 1,
				}"
				@click="handleClick(item, index)"
			>
				{{ item.label }}
			</span>
			<span v-if="index < items.length - 1" class="idea-breadcrumb__separator">
				{{ separator }}
			</span>
		</template>
	</nav>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from './types'

withDefaults(
	defineProps<{
		items?: BreadcrumbItem[]
		separator?: string
	}>(),
	{
		items: () => [],
		separator: '/',
	}
)

const emit = defineEmits<{
	(e: 'click', item: BreadcrumbItem, index: number): void
}>()

function handleClick(item: BreadcrumbItem, index: number) {
	if (item.path && index < items.length - 1) {
		emit('click', item, index)
	}
}
</script>

<style scoped lang="less">
.idea-breadcrumb {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	font-size: 14px;
	line-height: 1;
	color: #b2b2b2;

	&__item {
		cursor: default;
		white-space: nowrap;

		&.is-link {
			cursor: pointer;
			transition: color 0.2s;

			&:hover {
				color: #333333;
			}
		}

		&.is-current {
			color: #333333;
			font-weight: 500;
		}
	}

	&__separator {
		margin: 0 8px;
		color: var(--idea-color-text-placeholder);
		user-select: none;
	}
}
</style>
