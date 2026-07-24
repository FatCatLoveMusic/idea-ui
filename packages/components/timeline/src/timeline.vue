<template>
  <div class="idea-timeline">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="idea-timeline-item"
      :class="{ 'is-last': index === items.length - 1 }"
    >
      <div class="idea-timeline-item__dot" :class="item.type ? `idea-timeline-item__dot--${item.type}` : ''">
        <svg v-if="item.type === 'success'" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <div v-else-if="item.type === 'danger'" class="idea-timeline-item__dot-inner"></div>
        <div v-else class="idea-timeline-item__dot-inner"></div>
      </div>
      <div class="idea-timeline-item__line" v-if="index < items.length - 1" />
      <div class="idea-timeline-item__content">
        <div class="idea-timeline-item__time" v-if="item.time">{{ item.time }}</div>
        <div class="idea-timeline-item__title">{{ item.title }}</div>
        <div class="idea-timeline-item__desc" v-if="item.description">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineItem {
  title: string
  time?: string
  description?: string
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
}

interface Props {
  items?: TimelineItem[]
}

withDefaults(defineProps<Props>(), {
  items: () => [],
})
</script>

<style scoped lang="less">
.idea-timeline {
  padding: 0;
}

.idea-timeline-item {
  display: flex;
  padding-bottom: 20px;
  position: relative;

  &__dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--idea-color-primary, #ED6F22);
    flex-shrink: 0;
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    &--success {
      background: var(--idea-color-success, #46c620);
    }

    &--danger {
      background: var(--idea-color-danger, #ff5651);
    }

    &--warning {
      background: var(--idea-color-warning, #ff8330);
    }

    &--info {
      background: var(--idea-color-info, #3acaf0);
    }

    &-inner {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #fff;
    }
  }

  &__line {
    position: absolute;
    left: 5px;
    top: 20px;
    bottom: 0;
    width: 2px;
    background: var(--idea-color-border-lighter, #EBEEF5);
  }

  &__content {
    margin-left: 12px;
    flex: 1;
  }

  &__time {
    font-size: 12px;
    color: var(--idea-color-text-secondary, #909399);
    margin-bottom: 4px;
  }

  &__title {
    font-size: 14px;
    color: var(--idea-color-text-primary, #303133);
    font-weight: 500;
  }

  &__desc {
    font-size: 13px;
    color: var(--idea-color-text-regular, #606266);
    margin-top: 4px;
  }
}
</style>