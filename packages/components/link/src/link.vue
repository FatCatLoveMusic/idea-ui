<template>
	<div class="idea-link" @click="handleClick">
		<slot />
	</div>
</template>

<script setup lang="ts">
interface Props {
	href?: string
	target?: string
}

const props = withDefaults(defineProps<Props>(), {
	href: '',
	target: '_self',
})

const emit = defineEmits<{
	(e: 'click', event: MouseEvent): void
}>()

function handleClick(event: MouseEvent) {
	if (props.href) {
		window.open(props.href, props.target)
	}
	emit('click', event)
}
</script>

<style scoped lang="less">
.idea-link {
	display: inline;
	color: var(--idea-color-primary, #ED6F22);
	cursor: pointer;
	text-decoration: none;

	&:hover {
		color: var(--idea-color-primary-light-1, #f07b3c);
	}
}
</style>