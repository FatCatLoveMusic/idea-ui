<template>
  <Transition :name="transitionName">
    <div v-show="visible" :style="customStyle" class="idea-back-top" @click="backToTop">
      <svg width="16" height="16" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="height: 16px; width: 16px;">
        <title>{{ t('idea.backToTop') }}</title>
        <g>
          <path d="M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z" fill-rule="evenodd"/>
        </g>
      </svg>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLocale } from '@idea-ui/locale'

const { t } = useLocale()

const props = withDefaults(defineProps<{
  visibilityHeight?: number
  backPosition?: number
  customStyle?: Record<string, string>
  transitionName?: string
  target?: () => HTMLElement | null
}>(), {
  visibilityHeight: 400,
  backPosition: 0,
  transitionName: 'fade',
  customStyle: () => ({
    right: '50px',
    bottom: '60px',
    width: '40px',
    height: '40px',
    borderRadius: '3px',
    lineHeight: '45px',
    background: '#fff',
  }),
})

const emit = defineEmits<{
  (e: 'scroll', scrollTop: number): void
}>()

const visible = ref(false)
let scrollEl: HTMLElement | Window = window

const handleScroll = () => {
  const scrollTop = scrollEl instanceof Window
    ? document.documentElement.scrollTop || document.body.scrollTop
    : scrollEl.scrollTop
  visible.value = scrollTop > props.visibilityHeight
  emit('scroll', scrollTop)
}

const backToTop = () => {
  const target = scrollEl instanceof Window
    ? document.documentElement
    : scrollEl
  const startTop = target.scrollTop
  const duration = 300
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    target.scrollTop = startTop * (1 - ease) + props.backPosition * ease
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  requestAnimationFrame(animate)
}

onMounted(() => {
  if (props.target) {
    scrollEl = props.target() || window
  }
  scrollEl.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  scrollEl.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="less">
.idea-back-top {
  position: fixed;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: var(--idea-color-primary, #ED6F22);
  z-index: 1000;

  &:hover {
    color: var(--idea-color-primary-light-1, #f07b3c);
  }

  svg {
    fill: currentColor;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>