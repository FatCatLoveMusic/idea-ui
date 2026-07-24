<template>
  <div class="idea-versions">
    <div class="idea-versions__current" v-if="currentVersion">
      <span class="idea-versions__label">{{ t('idea.versions.current') }}</span>
      <span class="idea-versions__value">{{ currentVersion }}</span>
    </div>
    <ul class="idea-versions__list" v-if="versions.length > 0">
      <li
        v-for="(v, index) in versions"
        :key="index"
        class="idea-versions__item"
        :class="{ 'is-active': v.active }"
        @click="handleSelect(v, index)"
      >
        <span class="idea-versions__item-text">{{ v.label || v.value }}</span>
        <span class="idea-versions__item-time" v-if="v.time">{{ v.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '@idea-ui/locale'

const { t } = useLocale()

interface VersionItem {
  label?: string
  value: string
  time?: string
  active?: boolean
}

interface Props {
  currentVersion?: string
  versions?: VersionItem[]
}

withDefaults(defineProps<Props>(), {
  currentVersion: '',
  versions: () => [],
})

const emit = defineEmits<{
  (e: 'select', version: VersionItem, index: number): void
}>()

function handleSelect(v: VersionItem, index: number) {
  emit('select', v, index)
}
</script>

<style scoped lang="less">
.idea-versions {
  &__current {
    padding: 12px 16px;
    background: var(--idea-color-border-extra-light, #F2F6FC);
    border-radius: 4px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__label {
    font-size: 12px;
    color: var(--idea-color-text-secondary, #909399);
  }

  &__value {
    font-size: 14px;
    font-weight: 500;
    color: var(--idea-color-primary, #ED6F22);
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: var(--idea-color-border-extra-light, #F2F6FC);
    }

    &.is-active {
      background: rgba(237, 111, 34, 0.08);
      color: var(--idea-color-primary, #ED6F22);
    }

    &-text {
      font-size: 14px;
    }

    &-time {
      font-size: 12px;
      color: var(--idea-color-text-secondary, #909399);
    }
  }
}
</style>