<template>
	<Transition
		@before-enter="onBeforeEnter"
		@enter="onEnter"
		@after-enter="onAfterEnter"
		@before-leave="onBeforeLeave"
		@leave="onLeave"
		@after-leave="onAfterLeave"
	>
		<slot />
	</Transition>
</template>

<script setup lang="ts">
interface Props {
	delay?: number
}

const props = withDefaults(defineProps<Props>(), {
	delay: 0.3,
})

const elTransition = `${props.delay}s height ease-in-out, ${props.delay}s padding-top ease-in-out, ${props.delay}s padding-bottom ease-in-out`

function onBeforeEnter(el: Element) {
	const htmlEl = el as HTMLElement
	htmlEl.style.transition = elTransition
	if (!htmlEl.dataset) return
	if (!htmlEl.dataset.oldPaddingTop) {
		htmlEl.dataset.oldPaddingTop = htmlEl.style.paddingTop
		htmlEl.dataset.oldPaddingBottom = htmlEl.style.paddingBottom
	}
	htmlEl.style.height = '0'
	htmlEl.style.paddingTop = '0'
	htmlEl.style.paddingBottom = '0'
}

function onEnter(el: Element) {
	const htmlEl = el as HTMLElement
	if (!htmlEl.dataset) return
	htmlEl.dataset.oldOverflow = htmlEl.style.overflow
	if (htmlEl.scrollHeight !== 0) {
		htmlEl.style.height = htmlEl.scrollHeight + 'px'
		htmlEl.style.paddingTop = htmlEl.dataset.oldPaddingTop || ''
		htmlEl.style.paddingBottom = htmlEl.dataset.oldPaddingBottom || ''
	} else {
		htmlEl.style.height = ''
		htmlEl.style.paddingTop = htmlEl.dataset.oldPaddingTop || ''
		htmlEl.style.paddingBottom = htmlEl.dataset.oldPaddingBottom || ''
	}
	htmlEl.style.overflow = 'hidden'
}

function onAfterEnter(el: Element) {
	const htmlEl = el as HTMLElement
	htmlEl.style.transition = ''
	htmlEl.style.height = ''
	if (htmlEl.dataset) {
		htmlEl.style.overflow = htmlEl.dataset.oldOverflow || ''
	}
}

function onBeforeLeave(el: Element) {
	const htmlEl = el as HTMLElement
	if (!htmlEl.dataset) return
	htmlEl.dataset.oldPaddingTop = getComputedStyle(htmlEl).paddingTop
	htmlEl.dataset.oldPaddingBottom = getComputedStyle(htmlEl).paddingBottom
	htmlEl.dataset.oldOverflow = getComputedStyle(htmlEl).overflow
	htmlEl.style.height = htmlEl.scrollHeight + 'px'
	htmlEl.style.overflow = 'hidden'
}

function onLeave(el: Element) {
	const htmlEl = el as HTMLElement
	if (htmlEl.scrollHeight !== 0) {
		htmlEl.style.transition = elTransition
		htmlEl.style.height = '0'
		htmlEl.style.paddingTop = '0'
		htmlEl.style.paddingBottom = '0'
	}
}

function onAfterLeave(el: Element) {
	const htmlEl = el as HTMLElement
	htmlEl.style.transition = ''
	htmlEl.style.height = ''
	if (htmlEl.dataset) {
		htmlEl.style.overflow = htmlEl.dataset.oldOverflow || ''
		htmlEl.style.paddingTop = htmlEl.dataset.oldPaddingTop || ''
		htmlEl.style.paddingBottom = htmlEl.dataset.oldPaddingBottom || ''
	}
}
</script>