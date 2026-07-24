<template>
  <div class="idea-segment">
    <div
      v-for="item in options"
      :key="item.value"
      class="idea-segment__btn"
      :class="{ 'is-active': modelValue === item.value, 'is-disabled': item.disabled }"
      @click="handleClick(item)"
    >
      <slot name="item" :item="item">
        <span>{{ item.label }}</span>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SegmentOption {
  label: string
  value: string | number
  disabled?: boolean
}

interface Props {
  modelValue?: string | number
  options?: SegmentOption[]
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  options: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

function handleClick(item: SegmentOption) {
  if (item.disabled) return
  emit('update:modelValue', item.value)
  emit('change', item.value)
}
</script>

<style scoped lang="less">
.idea-segment {
  display: inline-flex;
  border: 1px solid var(--idea-color-border, #DCDFE6);
  border-radius: var(--idea-border-radius, 4px);
  overflow: hidden;

  &__btn {
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    color: var(--idea-color-text-regular, #606266);
    border-right: 1px solid var(--idea-color-border, #DCDFE6);
    transition: all 0.2s;
    user-select: none;

    &:last-child {
      border-right: none;
    }

    &:hover:not(.is-disabled) {
      color: var(--idea-color-primary, #ED6F22);
    }

    &.is-active {
      background: var(--idea-color-primary, #ED6F22);
      color: #fff;
      border-color: var(--idea-color-primary, #ED6F22);
    }

    &.is-disabled {
      color: var(--idea-color-text-placeholder, #C0C4CC);
      cursor: not-allowed;
    }
  }
}
</style>