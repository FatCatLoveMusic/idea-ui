<template>
  <div class="idea-tile-filter">
    <div
      v-for="item in filters"
      :key="item.value"
      class="idea-tile-filter__item"
      :class="{ 'is-active': modelValue === item.value }"
      @click="handleClick(item)"
    >
      {{ item.label }}
      <span v-if="item.count !== undefined" class="idea-tile-filter__count">{{ item.count }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FilterItem {
  label: string
  value: string | number
  count?: number
}

interface Props {
  modelValue?: string | number
  filters?: FilterItem[]
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  filters: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

function handleClick(item: FilterItem) {
  emit('update:modelValue', item.value)
  emit('change', item.value)
}
</script>

<style scoped lang="less">
.idea-tile-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  &__item {
    padding: 6px 14px;
    border: 1px solid var(--idea-color-border, #DCDFE6);
    border-radius: 20px;
    font-size: 13px;
    color: var(--idea-color-text-regular, #606266);
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;

    &:hover {
      color: var(--idea-color-primary, #ED6F22);
      border-color: var(--idea-color-primary, #ED6F22);
    }

    &.is-active {
      background: var(--idea-color-primary, #ED6F22);
      border-color: var(--idea-color-primary, #ED6F22);
      color: #fff;
    }
  }

  &__count {
    margin-left: 4px;
    font-size: 12px;
  }
}
</style>