<template>
	<div class="idea-steps">
		<div
			v-for="(step, index) in steps"
			:key="index"
			class="idea-step"
			:class="{
				'is-active': active === index,
				'is-done': active > index,
				'is-last': index === steps.length - 1,
			}"
		>
			<div class="idea-step__head">
				<div class="idea-step__number">
					<span v-if="active > index">&#10003;</span>
					<span v-else>{{ index + 1 }}</span>
				</div>
				<div class="idea-step__line" v-if="index < steps.length - 1" />
			</div>
			<div class="idea-step__content">
				<div class="idea-step__title">{{ step.title }}</div>
				<div class="idea-step__desc" v-if="step.description">{{ step.description }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface StepItem {
	title: string
	description?: string
}

interface Props {
	active?: number
	steps?: StepItem[]
}

withDefaults(defineProps<Props>(), {
	active: 0,
	steps: () => [],
})
</script>

<style scoped lang="less">
.idea-steps {
	display: flex;
}

.idea-step {
	flex: 1;
	position: relative;

	&__head {
		display: flex;
		align-items: center;
	}

	&__number {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		border: 2px solid var(--idea-color-border, #DCDFE6);
		background: #fff;
		color: var(--idea-color-text-secondary, #909399);
		flex-shrink: 0;
		transition: all 0.3s;
	}

	&__line {
		flex: 1;
		height: 2px;
		background: var(--idea-color-border, #DCDFE6);
		margin: 0 8px;
		transition: background 0.3s;
	}

	&__content {
		margin-top: 8px;
		padding-right: 8px;
	}

	&__title {
		font-size: 14px;
		font-weight: 500;
		color: var(--idea-color-text-secondary, #909399);
		transition: color 0.3s;
	}

	&__desc {
		font-size: 12px;
		color: var(--idea-color-text-placeholder, #C0C4CC);
		margin-top: 4px;
	}

	&.is-active {
		.idea-step__number {
			border-color: var(--idea-color-primary, #ED6F22);
			background: var(--idea-color-primary, #ED6F22);
			color: #fff;
		}
		.idea-step__title {
			color: var(--idea-color-text-primary, #303133);
		}
	}

	&.is-done {
		.idea-step__number {
			border-color: var(--idea-color-primary, #ED6F22);
			background: var(--idea-color-primary, #ED6F22);
			color: #fff;
		}
		.idea-step__line {
			background: var(--idea-color-primary, #ED6F22);
		}
		.idea-step__title {
			color: var(--idea-color-primary, #ED6F22);
		}
	}
}
</style>