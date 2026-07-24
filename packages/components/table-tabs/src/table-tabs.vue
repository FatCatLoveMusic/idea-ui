<template>
  <div class="idea-table-tabs">
    <div
      v-for="tab in tabs"
      :key="tab.value"
      class="idea-table-tabs__item"
      :class="{ 'is-active': modelValue === tab.value }"
      @click="handleClick(tab)"
    >
      <span>{{ tab.label }}</span>
      <span v-if="tab.count !== undefined" class="idea-table-tabs__count">({{ tab.count }})</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TabItem {
  label: string
  value: string | number
  count?: number
}

interface Props {
  modelValue?: string | number
  tabs?: TabItem[]
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  tabs: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

function handleClick(tab: TabItem) {
  emit('update:modelValue', tab.value)
  emit('change', tab.value)
}
</script>

<style scoped lang="less">
.idea-table-tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--idea-color-border-lighter, #EBEEF5);

  &__item {
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    color: var(--idea-color-text-regular, #606266);
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
    user-select: none;

    &:hover {
      color: var(--idea-color-primary, #ED6F22);
    }

    &.is-active {
      color: var(--idea-color-primary, #ED6F22);
      border-bottom-color: var(--idea-color-primary, #ED6F22);
      font-weight: 500;
    }
  }

  &__count {
    font-size: 12px;
    color: var(--idea-color-text-secondary, #909399);
  }
}
</style>