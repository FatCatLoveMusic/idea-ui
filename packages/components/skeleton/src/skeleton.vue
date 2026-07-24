<template>
  <div>
    <div class="idea-skeleton-placeholder">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque debitis repellat ex modi, a voluptas minima ipsa unde. Enim tempora provident necessitatibus earum blanditiis, natus fugiat non est! Consectetur, atque?</div>
    <ul class="idea-skeleton">
      <li class="skeleton-loading" v-for="i in rows" :key="i"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  rows?: number
}

withDefaults(defineProps<Props>(), {
  rows: 5,
})
</script>

<style scoped lang="less">
@idea-skeleton-color: #ddd;
@idea-skeleton-to-color: #eef0f4;

.idea-skeleton {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  > li {
    width: 100%;
    height: 16px;
    list-style: none;
    background: @idea-skeleton-color;

    &:first-child {
      width: 50%;
    }

    &:last-child:not(:first-child):not(:nth-child(2)) {
      width: 61%;
    }

    + li {
      margin-top: 16px;
    }
  }

  > li.skeleton-loading {
    background: linear-gradient(
      90deg,
      @idea-skeleton-color 25%,
      @idea-skeleton-to-color 37%,
      @idea-skeleton-color 63%
    );
    background-size: 400% 100%;
    animation: ideaSkeletonLoading 1.4s ease infinite;
  }
}

@keyframes ideaSkeletonLoading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.idea-skeleton-placeholder {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  visibility: hidden;
  height: 1px;
}
</style>