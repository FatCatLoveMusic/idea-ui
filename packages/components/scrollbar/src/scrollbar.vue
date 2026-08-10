<template>
	<div class="idea-scrollbar__wrapper" :class="classes" ref="scrollWrapperRef" :style="styles">
		<div
			class="idea-scrollbar__area"
			:class="{ 'idea-scrollbar-transition': !dragging }"
			ref="scrollAreaRef"
			@wheel="onScroll"
			@touchstart="startDrag"
			@touchmove="onDrag"
			@touchend="stopDrag"
			:style="{ marginTop: top * -1 + 'px', marginLeft: left * -1 + 'px' }"
		>
			<slot />
			<div v-if="ready && hasVertical" class="idea-scrollbar__scrollbar-vertical"
				:class="{ 'idea-scrollbar-transition--scrollbar': !dragging }"
				:style="{ height: scrollWrapperHeight + 'px' }"
				@mousedown="startScrollbarDrag($event, 'vertical')"
				@touchstart="startScrollbarDrag($event, 'vertical')"
			>
				<div class="scrollbar" :style="verticalBarStyle"></div>
			</div>
			<div v-if="ready && hasHorizontal" class="idea-scrollbar__scrollbar-horizontal"
				:class="{ 'idea-scrollbar-transition--scrollbar': !dragging }"
				:style="{ width: scrollWrapperWidth + 'px' }"
				@mousedown="startScrollbarDrag($event, 'horizontal')"
				@touchstart="startScrollbarDrag($event, 'horizontal')"
			>
				<div class="scrollbar" :style="horizontalBarStyle"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

interface Props {
	classes?: string
	styles?: Record<string, string>
	speed?: number
	direction?: string
	resizeable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	speed: 80,
	direction: 'vertical',
	resizeable: true,
})

const emit = defineEmits<{
	(e: 'maxScroll', data: { top: boolean; bottom: boolean; right: boolean; left: boolean }): void
}>()

const scrollWrapperRef = ref<HTMLElement | null>(null)
const scrollAreaRef = ref<HTMLElement | null>(null)

const ready = ref(false)
const top = ref(0)
const left = ref(0)
const scrollAreaHeight = ref(0)
const scrollAreaWidth = ref(0)
const scrollWrapperHeight = ref(0)
const scrollWrapperWidth = ref(0)
const dragging = ref(false)
const start = ref({ y: 0, x: 0 })

const hasVertical = computed(() => props.direction !== 'horizontal')
const hasHorizontal = computed(() => props.direction !== 'vertical')

const verticalBarHeight = computed(() => {
	if (scrollAreaHeight.value === 0) return 0
	const ratio = scrollWrapperHeight.value / scrollAreaHeight.value
	return Math.max(ratio * scrollWrapperHeight.value, 10)
})

const verticalBarTop = computed(() => {
	if (scrollAreaHeight.value === 0) return 0
	return (top.value / scrollAreaHeight.value) * scrollWrapperHeight.value
})

const horizontalBarWidth = computed(() => {
	if (scrollAreaWidth.value === 0) return 0
	const ratio = scrollWrapperWidth.value / scrollAreaWidth.value
	return Math.max(ratio * scrollWrapperWidth.value, 10)
})

const horizontalBarLeft = computed(() => {
	if (scrollAreaWidth.value === 0) return 0
	return (left.value / scrollAreaWidth.value) * scrollWrapperWidth.value
})

const verticalBarStyle = computed(() => ({
	height: verticalBarHeight.value + 'px',
	transform: `translateY(${verticalBarTop.value}px)`,
}))

const horizontalBarStyle = computed(() => ({
	width: horizontalBarWidth.value + 'px',
	transform: `translateX(${horizontalBarLeft.value}px)`,
}))

function getSize() {
	const area = scrollAreaRef.value
	const wrapper = scrollWrapperRef.value
	if (!area || !wrapper) return { scrollAreaHeight: 0, scrollAreaWidth: 0, scrollWrapperHeight: 0, scrollWrapperWidth: 0 }
	return {
		scrollAreaHeight: area.clientHeight,
		scrollAreaWidth: area.clientWidth,
		scrollWrapperHeight: wrapper.clientHeight,
		scrollWrapperWidth: wrapper.clientWidth,
	}
}

function calculateSize(cb?: () => void) {
	const size = getSize()
	if (
		size.scrollWrapperHeight !== scrollWrapperHeight.value ||
		size.scrollWrapperWidth !== scrollWrapperWidth.value ||
		size.scrollAreaHeight !== scrollAreaHeight.value ||
		size.scrollAreaWidth !== scrollAreaWidth.value
	) {
		if (size.scrollWrapperHeight / size.scrollAreaHeight > 1) {
			top.value = 0
		} else if (top.value > size.scrollAreaHeight - 10) {
			top.value = size.scrollAreaHeight
		}
		if (size.scrollWrapperWidth / size.scrollAreaWidth > 1) {
			left.value = 0
		}
		scrollAreaHeight.value = size.scrollAreaHeight
		scrollAreaWidth.value = size.scrollAreaWidth
		scrollWrapperHeight.value = size.scrollWrapperHeight
		scrollWrapperWidth.value = size.scrollWrapperWidth
		ready.value = true
		cb?.()
	} else {
		cb?.()
	}
}

function normalizeVertical(next: number) {
	const lowerEnd = scrollAreaHeight.value - scrollWrapperHeight.value
	const maxBottom = next > lowerEnd
	if (maxBottom) next = lowerEnd
	const maxTop = next < 0
	if (maxTop) next = 0
	if (top.value !== next) {
		top.value = next
		if (maxTop || maxBottom) {
			emit('maxScroll', { top: maxTop, bottom: maxBottom, right: false, left: false })
		}
	}
}

function normalizeHorizontal(next: number) {
	const rightEnd = scrollAreaWidth.value - scrollWrapperWidth.value
	const maxRight = next > rightEnd
	if (maxRight) next = rightEnd
	const maxLeft = next < 0
	if (next < 0) next = 0
	if (left.value !== next) {
		left.value = next
		if (maxRight || maxLeft) {
			emit('maxScroll', { right: maxRight, left: maxLeft, top: false, bottom: false })
		}
	}
}

function onScroll(e: WheelEvent) {
	calculateSize(() => {
		const num = props.speed
		const shifted = e.shiftKey
		let scrollY = e.deltaY > 0 ? num : -num
		let scrollX = e.deltaX > 0 ? num : -num
		if (shifted && e.deltaX === 0) scrollX = e.deltaY > 0 ? num : -num

		const nextY = top.value + scrollY
		const nextX = left.value + scrollX

		const canScrollY = scrollAreaHeight.value > scrollWrapperHeight.value
		const canScrollX = scrollAreaWidth.value > scrollWrapperWidth.value

		if (canScrollY && !shifted) normalizeVertical(nextY)
		if (shifted && canScrollX) normalizeHorizontal(nextX)
	})
	e.preventDefault()
	e.stopPropagation()
}

function startDrag(e: TouchEvent) {
	const evt = e.changedTouches ? e.changedTouches[0] : e
	calculateSize(() => {
		dragging.value = true
		start.value = { y: evt.pageY, x: evt.pageX }
	})
}

function onDrag(e: TouchEvent) {
	if (!dragging.value) return
	e.preventDefault()
	e.stopPropagation()
	const evt = e.changedTouches ? e.changedTouches[0] : e
	const yMovement = start.value.y - evt.clientY
	const xMovement = start.value.x - evt.clientX
	start.value = { y: evt.clientY, x: evt.clientX }
	normalizeVertical(top.value + yMovement)
	normalizeHorizontal(left.value + xMovement)
}

function stopDrag() {
	dragging.value = false
}

function startScrollbarDrag(e: MouseEvent | TouchEvent, type: 'vertical' | 'horizontal') {
	dragging.value = true
	const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
	const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX

	const onMove = (ev: MouseEvent | TouchEvent) => {
		const y = 'touches' in ev ? ev.touches[0].clientY : ev.clientY
		const x = 'touches' in ev ? ev.touches[0].clientX : ev.clientX
		if (type === 'vertical') {
			const ratio = y / scrollWrapperHeight.value
			normalizeVertical(ratio * scrollAreaHeight.value)
		} else {
			const ratio = x / scrollWrapperWidth.value
			normalizeHorizontal(ratio * scrollAreaWidth.value)
		}
	}

	const onUp = () => {
		dragging.value = false
		document.removeEventListener('mousemove', onMove)
		document.removeEventListener('mouseup', onUp)
		document.removeEventListener('touchmove', onMove)
		document.removeEventListener('touchend', onUp)
	}

	document.addEventListener('mousemove', onMove)
	document.addEventListener('mouseup', onUp)
	document.addEventListener('touchmove', onMove)
	document.addEventListener('touchend', onUp)
}

onMounted(() => {
	nextTick(() => {
		calculateSize()
		if (props.resizeable) {
			window.addEventListener('resize', () => calculateSize())
		}
	})
})

onBeforeUnmount(() => {
	if (props.resizeable) {
		window.removeEventListener('resize', () => calculateSize())
	}
})

defineExpose({
	scrollToY(y: number) {
		normalizeVertical(y)
	},
	scrollToX(x: number) {
		normalizeHorizontal(x)
	},
})
</script>

<style lang="less">
.idea-scrollbar-transition,
.idea-scrollbar__scrollbar-vertical,
.idea-scrollbar__scrollbar-horizontal {
	transition: all 0.2s ease;
}

.idea-scrollbar-transition--scrollbar {
	transition: opacity 0.2s linear;
}

.idea-scrollbar__wrapper {
	overflow: hidden !important;
	position: relative;
	background: var(--idea-bg-color, #fff);

	&:hover .idea-scrollbar__scrollbar-vertical,
	&:hover .idea-scrollbar__scrollbar-horizontal {
		opacity: 1;
	}
}

.idea-scrollbar__scrollbar-vertical,
.idea-scrollbar__scrollbar-horizontal {
	opacity: 0;
	position: absolute;
	background: transparent;
}

.idea-scrollbar__scrollbar-vertical .scrollbar,
.idea-scrollbar__scrollbar-horizontal .scrollbar {
	position: relative;
	background: rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	cursor: pointer;

	&:hover {
		background: rgba(0, 0, 0, 0.3);
	}
}

.idea-scrollbar__scrollbar-vertical {
	width: 6px;
	height: 100%;
	top: 0;
	right: 0;

	.scrollbar {
		min-height: 10px;
		width: 6px;
	}
}

.idea-scrollbar__scrollbar-horizontal {
	height: 6px;
	width: 100%;
	bottom: 0;
	left: 0;

	.scrollbar {
		height: 6px;
	}
}
</style>