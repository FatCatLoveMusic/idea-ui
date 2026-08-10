<template>
	<Teleport to="body">
		<Transition name="idea-dialog-fade">
			<div v-if="modelValue" class="idea-dialog-overlay" :style="{ zIndex: zIndex }" @click.self="onOverlayClick">
				<div
					class="idea-dialog"
					:style="{ width: width, top: top, zIndex: zIndex + 1 }"
					ref="dialogRef"
				>
					<div class="idea-dialog__header" @mousedown="startDrag" v-if="showHeader">
						<slot name="title">
							<span class="idea-dialog__title">{{ title }}</span>
						</slot>
						<button class="idea-dialog__close" @click="close" v-if="showClose">&times;</button>
					</div>
					<div class="idea-dialog__body">
						<slot />
					</div>
					<div class="idea-dialog__footer" v-if="$slots.footer">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { getMaxZIndex } from '@idea-ui/utils'

interface Props {
	modelValue: boolean
	title?: string
	width?: string
	top?: string
	showHeader?: boolean
	showClose?: boolean
	draggable?: boolean
	closeOnClickOverlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	title: '',
	width: '520px',
	top: '15vh',
	showHeader: true,
	showClose: true,
	draggable: true,
	closeOnClickOverlay: true,
})

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void
	(e: 'close'): void
	(e: 'open'): void
}>()

const dialogRef = ref<HTMLElement | null>(null)
const zIndex = ref(2000)

const close = () => {
	emit('update:modelValue', false)
	emit('close')
}

const onOverlayClick = () => {
	if (props.closeOnClickOverlay) {
		close()
	}
}

// Drag functionality
let isDragging = false
let dragStartX = 0
let dragStartY = 0
let dialogStartX = 0
let dialogStartY = 0

function startDrag(e: MouseEvent) {
	if (!props.draggable) return
	isDragging = true
	dragStartX = e.clientX
	dragStartY = e.clientY
	const dialog = dialogRef.value
	if (dialog) {
		dialogStartX = dialog.offsetLeft
		dialogStartY = dialog.offsetTop
	}
	document.addEventListener('mousemove', onDrag)
	document.addEventListener('mouseup', stopDrag)
}

function onDrag(e: MouseEvent) {
	if (!isDragging || !dialogRef.value) return
	const dx = e.clientX - dragStartX
	const dy = e.clientY - dragStartY
	dialogRef.value.style.left = dialogStartX + dx + 'px'
	dialogRef.value.style.top = dialogStartY + dy + 'px'
	dialogRef.value.style.margin = '0'
}

function stopDrag() {
	isDragging = false
	document.removeEventListener('mousemove', onDrag)
	document.removeEventListener('mouseup', stopDrag)
}

onMounted(() => {
	zIndex.value = getMaxZIndex()
	emit('open')
})

onBeforeUnmount(() => {
	document.removeEventListener('mousemove', onDrag)
	document.removeEventListener('mouseup', stopDrag)
})
</script>

<style scoped lang="less">
.idea-dialog-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
}

.idea-dialog {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	background: var(--idea-bg-color-overlay, #fff);
	border-radius: var(--idea-border-radius-lg, 8px);
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	max-height: 80vh;
	overflow: hidden;

	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 20px;
		border-bottom: 1px solid var(--idea-color-border-lighter, #EBEEF5);
		cursor: move;
		user-select: none;
	}

	&__title {
		font-size: 16px;
		font-weight: 600;
		color: var(--idea-color-text-primary, #303133);
	}

	&__close {
		border: none;
		background: none;
		font-size: 20px;
		color: var(--idea-color-text-secondary, #909399);
		cursor: pointer;
		padding: 0;
		line-height: 1;

		&:hover {
			color: var(--idea-color-primary, #ED6F22);
		}
	}

	&__body {
		padding: 20px;
		overflow-y: auto;
		flex: 1;
	}

	&__footer {
		padding: 12px 20px;
		border-top: 1px solid var(--idea-color-border-lighter, #EBEEF5);
		display: flex;
		justify-content: flex-end;
		gap: 8px;
	}
}

.idea-dialog-fade-enter-active,
.idea-dialog-fade-leave-active {
	transition: opacity 0.3s ease;
}

.idea-dialog-fade-enter-from,
.idea-dialog-fade-leave-to {
	opacity: 0;
}
</style>