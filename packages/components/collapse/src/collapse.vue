<template>
	<div class="idea-collapse">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="idea-collapse-item"
			:class="{ 'is-active': activeNames.includes(item.name) }"
		>
			<div class="idea-collapse-item__header" @click="toggleItem(item.name)">
				<slot name="title" :item="item" :index="index">
					<span>{{ item.title }}</span>
				</slot>
				<span class="idea-collapse-item__arrow" :class="{ 'is-active': activeNames.includes(item.name) }">
					<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
						<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
					</svg>
				</span>
			</div>
			<CollapseTransition>
				<div v-show="activeNames.includes(item.name)" class="idea-collapse-item__content">
					<slot :item="item" :index="index" />
				</div>
			</CollapseTransition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import CollapseTransition from '../../collapse-transition/src/collapse-transition.vue'

interface CollapseItem {
	name: string | number
	title: string
}

interface Props {
	modelValue?: (string | number)[]
	items?: CollapseItem[]
	accordion?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	modelValue: () => [],
	items: () => [],
	accordion: false,
})

const emit = defineEmits<{
	(e: 'update:modelValue', value: (string | number)[]): void
	(e: 'change', value: (string | number)[]): void
}>()

const activeNames = ref<(string | number)[]>([...props.modelValue])

watch(() => props.modelValue, (val) => {
	activeNames.value = [...val]
})

function toggleItem(name: string | number) {
	const index = activeNames.value.indexOf(name)
	if (props.accordion) {
		activeNames.value = index > -1 ? [] : [name]
	} else {
		if (index > -1) {
			activeNames.value.splice(index, 1)
		} else {
			activeNames.value.push(name)
		}
	}
	emit('update:modelValue', [...activeNames.value])
	emit('change', [...activeNames.value])
}
</script>

<style scoped lang="less">
.idea-collapse {
	border: 1px solid var(--idea-color-border, #DCDFE6);
	border-radius: var(--idea-border-radius, 4px);
}

.idea-collapse-item {
	&:not(:last-child) {
		border-bottom: 1px solid var(--idea-color-border-lighter, #EBEEF5);
	}

	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 16px;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		color: var(--idea-color-text-primary, #303133);
		user-select: none;

		&:hover {
			background: var(--idea-color-border-extra-light, #F2F6FC);
		}
	}

	&__arrow {
		transition: transform 0.3s;
		color: var(--idea-color-text-secondary, #909399);
		display: flex;

		&.is-active {
			transform: rotate(180deg);
		}
	}

	&__content {
		padding: 16px;
		color: var(--idea-color-text-regular, #606266);
		font-size: 14px;
		line-height: 1.6;
	}
}
</style>