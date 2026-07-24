<template>
  <Teleport to="body">
    <Transition name="idea-drawer-fade">
      <div v-if="modelValue" class="idea-drawer-overlay" :style="{ zIndex: zIndex }" @click.self="onOverlayClick">
        <div
          class="idea-drawer"
          :class="[`idea-drawer--${placement}`, { 'idea-drawer--no-header': !showHeader }]"
          :style="{ width: isHorizontal ? width : 'auto', height: isVertical ? height : 'auto', zIndex: zIndex + 1 }"
        >
          <div class="idea-drawer__header" v-if="showHeader">
            <slot name="title">
              <span class="idea-drawer__title">{{ title }}</span>
            </slot>
            <button class="idea-drawer__close" @click="close" v-if="showClose">&times;</button>
          </div>
          <div class="idea-drawer__body">
            <slot />
          </div>
          <div class="idea-drawer__footer" v-if="$slots.footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { getMaxZIndex } from '@idea-ui/utils'

interface Props {
  modelValue: boolean
  title?: string
  width?: string
  height?: string
  placement?: 'left' | 'right' | 'top' | 'bottom'
  showHeader?: boolean
  showClose?: boolean
  closeOnClickOverlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  width: '400px',
  height: '300px',
  placement: 'right',
  showHeader: true,
  showClose: true,
  closeOnClickOverlay: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const zIndex = ref(2000)

const isHorizontal = computed(() => props.placement === 'left' || props.placement === 'right')
const isVertical = computed(() => props.placement === 'top' || props.placement === 'bottom')

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const onOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    close()
  }
}

onMounted(() => {
  zIndex.value = getMaxZIndex()
})
</script>

<style scoped lang="less">
.idea-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}

.idea-drawer {
  position: fixed;
  background: var(--idea-bg-color-overlay, #fff);
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);

  &--left {
    top: 0;
    left: 0;
    bottom: 0;
  }

  &--right {
    top: 0;
    right: 0;
    bottom: 0;
  }

  &--top {
    top: 0;
    left: 0;
    right: 0;
  }

  &--bottom {
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--idea-color-border-lighter, #EBEEF5);
    flex-shrink: 0;
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
    flex-shrink: 0;
  }
}

.idea-drawer-fade-enter-active,
.idea-drawer-fade-leave-active {
  transition: opacity 0.3s ease;
}

.idea-drawer-fade-enter-from,
.idea-drawer-fade-leave-to {
  opacity: 0;
}
</style>