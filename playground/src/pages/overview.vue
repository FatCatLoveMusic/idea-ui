<template>
  <div class="demo-page">
    <h2>组件概览</h2>
    <p class="demo-desc">
      idea-ui 是一套基于 Vue 3 的企业级 UI 组件库，提供了丰富的组件用于构建现代化的 Web 应用。
    </p>

    <div class="demo-section" v-for="group in groups" :key="group.title">
      <h3>{{ group.title }}</h3>
      <div class="component-grid">
        <router-link
          v-for="comp in group.components"
          :key="comp.path"
          :to="comp.path"
          class="component-card"
        >
          <div class="component-card__icon">{{ comp.icon }}</div>
          <div class="component-card__name">{{ comp.name }}</div>
          <div class="component-card__desc">{{ comp.desc }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const groups = [
  {
    title: '基础组件',
    components: [
      { path: '/component/back-top', name: 'Back Top', icon: '⬆', desc: '返回页面顶部的操作按钮' },
      { path: '/component/scrollbar', name: 'Scrollbar', icon: '📜', desc: '自定义样式的滚动条组件' },
      { path: '/component/skeleton', name: 'Skeleton', icon: '💀', desc: '骨架屏，用于数据加载时的占位展示' },
      { path: '/component/no-data', name: 'No Data', icon: '📭', desc: '数据为空时的占位提示' },
      { path: '/component/divider-line', name: 'Divider', icon: '➖', desc: '分割线，用于分隔内容区域' },
      { path: '/component/link', name: 'Link', icon: '🔗', desc: '链接组件，用于文字链接' },
    ],
  },
  {
    title: '布局组件',
    components: [
      { path: '/component/dialog', name: 'Dialog', icon: '💬', desc: '模态弹窗，可拖拽的对话框组件' },
      { path: '/component/drawer', name: 'Drawer', icon: '📂', desc: '抽屉组件，从屏幕边缘滑出的面板' },
      { path: '/component/collapse', name: 'Collapse', icon: '📋', desc: '折叠面板，可展开/收起的内容区域' },
      { path: '/component/tabs', name: 'Tabs', icon: '📑', desc: '标签页切换组件' },
    ],
  },
  {
    title: '导航组件',
    components: [
      { path: '/component/segment', name: 'Segment', icon: '🎛', desc: '分段控制器，用于切换不同视图' },
      { path: '/component/steps', name: 'Steps', icon: '🪜', desc: '步骤条，引导用户完成流程' },
      { path: '/component/timeline', name: 'Timeline', icon: '📅', desc: '时间轴，展示时间线信息' },
    ],
  },
  {
    title: '数据展示',
    components: [
      { path: '/component/card', name: 'Card', icon: '🃏', desc: '卡片容器，用于展示一组信息' },
      { path: '/component/empty-card', name: 'Empty Card', icon: '📭', desc: '空状态卡片，用于空数据展示' },
      { path: '/component/versions', name: 'Versions', icon: '🏷', desc: '版本号展示与切换组件' },
    ],
  },
  {
    title: '操作组件',
    components: [
      { path: '/component/button-group', name: 'Button Group', icon: '🔘', desc: '按钮组，用于多选切换' },
      { path: '/component/tile-filter', name: 'Tile Filter', icon: '🏷', desc: '平铺筛选器，标签式筛选' },
      { path: '/component/table-add-btn', name: 'Table Add', icon: '➕', desc: '表格新增按钮' },
      { path: '/component/table-tabs', name: 'Table Tabs', icon: '📊', desc: '表格Tab切换，带计数' },
    ],
  },
]
</script>

<style scoped lang="less">
.component-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.component-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: #ED6F22;
    box-shadow: 0 2px 12px rgba(237, 111, 34, 0.1);
  }

  &__icon {
    font-size: 28px;
    margin-bottom: 8px;
  }

  &__name {
    font-size: 15px;
    font-weight: 500;
    color: #303133;
    margin-bottom: 4px;
  }

  &__desc {
    font-size: 13px;
    color: #909399;
    line-height: 1.5;
  }
}
</style>