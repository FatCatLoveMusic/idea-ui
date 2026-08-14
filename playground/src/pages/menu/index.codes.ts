// ==================== Sidebar ====================
// 示例代码跟随当前语言（zh-cn / en / zh-tw）生成，与页面示例保持一致
export interface SidebarCodeLabels {
	workbench: string
	overview: string
	analytics: string
	system: string
	userMgmt: string
	roleMgmt: string
	permission: string
	sysConfig: string
	baseConfig: string
	security: string
	content: string
	articles: string
	comments: string
}

export interface MenuDemoLabels {
	workbench: string
	overview: string
	analytics: string
	system: string
	userMgmt: string
	roleMgmt: string
	permission: string
	sysConfig: string
	baseConfig: string
	security: string
	content: string
	articles: string
	comments: string
	about: string
	more: string
	statistics: string
}

// ==================== 通用插槽示例（所有布局均支持这些插槽） ====================
const slotsExample = `    <template #logo>
      <span style="font-weight: bold; font-size: 16px">Logo</span>
    </template>
    <template #header>
      <div style="font-size: 13px; color: #909399">Header Slot</div>
    </template>
    <template #header-extra>
      <span style="font-size: 12px; color: #909399">Header Extra</span>
    </template>
    <template #extra>
      <span style="font-size: 12px; color: #909399">Extra</span>
    </template>
    <template #footer>
      <div style="padding: 8px; text-align: center; font-size: 12px; color: #999">Footer</div>
    </template>
    <template #collapse-btn="{ collapsed }">
      <span style="font-size: 12px">{{ collapsed ? '◀' : '▶' }}</span>
    </template>
    <div style="padding: 24px; font-size: 14px; color: #606266">Content Area</div>
`

const sidebarCodeTemplate = `<template>
  <idea-menu
    layout="sidebar"
    v-model="active"
    :menus="menus"
    collapsible
  >
${slotsExample}  </idea-menu>
</template>
`

const sidebarMenusCode = (l: SidebarCodeLabels) => `const menus = [
  {
    id: '1', label: '${l.workbench}', icon: 'icon-computer', path: '/workbench',
    children: [
      { id: '1-1', label: '${l.overview}', icon: 'icon-icon_shuju', path: '/workbench/overview' },
      { id: '1-2', label: '${l.analytics}', icon: 'icon-baobiaofenxi', path: '/workbench/analytics' },
    ],
  },
  {
    id: '2', label: '${l.system}', icon: 'icon-shezhi', path: '/system',
    children: [
      { id: '2-1', label: '${l.userMgmt}', icon: 'icon-yonghuguanli', path: '/system/user' },
      { id: '2-2', label: '${l.roleMgmt}', icon: 'icon-userselection', path: '/system/role' },
      { id: '2-3', label: '${l.permission}', icon: 'icon-icon_lock', path: '/system/permission' },
      {
        id: '2-4', label: '${l.sysConfig}', icon: 'icon-icon_peizhi', path: '/system/config',
        children: [
          { id: '2-4-1', label: '${l.baseConfig}', path: '/system/config/base' },
          { id: '2-4-2', label: '${l.security}', path: '/system/config/security' },
        ],
      },
    ],
  },
  {
    id: '3', label: '${l.content}', icon: 'icon-wendang', path: '/content',
    children: [
      { id: '3-1', label: '${l.articles}', icon: 'icon-edit', path: '/content/articles' },
      { id: '3-2', label: '${l.comments}', icon: 'icon-xiaoxi', path: '/content/comments' },
    ],
  },
]
`

export function createSidebarCodeTs(l: SidebarCodeLabels): string {
	return `${sidebarCodeTemplate}
<script setup lang="ts">
import { ref } from 'vue'

const active = ref('1-1')
${sidebarMenusCode(l)}<\/script>`
}

export function createSidebarCodeJs(l: SidebarCodeLabels): string {
	return `${sidebarCodeTemplate}
<script setup>
import { ref } from 'vue'

const active = ref('1-1')
${sidebarMenusCode(l)}<\/script>`
}

// ==================== Sidebar Header ====================
export function createSidebarHeaderCodeTs(_l: MenuDemoLabels): string {
	return `<template>
  <idea-menu
    layout="sidebar-header"
    v-model="active"
    :menus="menus"
    collapsible
  >
${slotsExample}  </idea-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref('1-1')
const menus = [/* ... */]
<\/script>`
}

export function createSidebarHeaderCodeJs(_l: MenuDemoLabels): string {
	return `<template>
  <idea-menu layout="sidebar-header" v-model="active" :menus="menus" collapsible>
${slotsExample}  </idea-menu>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('1-1')
const menus = [/* ... */]
<\/script>`
}

// ==================== Top ====================
export function createTopCodeTs(l: MenuDemoLabels): string {
	return `<template>
  <idea-menu
    layout="top"
    v-model="active"
    :menus="menus"
  >
${slotsExample}  </idea-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('t1-1')
const menus = [
  {
    id: 't1', label: '${l.workbench}',
    children: [
      { id: 't1-1', label: '${l.overview}' },
      { id: 't1-2', label: '${l.analytics}' },
    ],
  },
  {
    id: 't2', label: '${l.system}',
    children: [
      { id: 't2-1', label: '${l.userMgmt}' },
      {
        id: 't2-2', label: '${l.more}',
        children: [
          { id: 't2-2-1', label: '${l.baseConfig}' },
        ],
      },
    ],
  },
  { id: 't3', label: '${l.about}' },
]
<\/script>`
}

export function createTopCodeJs(_l: MenuDemoLabels): string {
	return `<template>
  <idea-menu layout="top" v-model="active" :menus="menus">
${slotsExample}  </idea-menu>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('t1-1')
const menus = [/* ... */]
<\/script>`
}

// ==================== Top Sidebar ====================
export function createTopSidebarCodeTs(l: MenuDemoLabels): string {
	return `<template>
  <idea-menu
    layout="top-sidebar"
    v-model="active"
    :menus="menus"
  >
${slotsExample}  </idea-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('ts1-1')
const menus = [
  {
    id: 'ts1', label: '${l.workbench}',
    children: [
      { id: 'ts1-1', label: '${l.overview}' },
      { id: 'ts1-2', label: '${l.analytics}' },
    ],
  },
  {
    id: 'ts2', label: '${l.system}',
    children: [
      { id: 'ts2-1', label: '${l.userMgmt}' },
      { id: 'ts2-2', label: '${l.roleMgmt}' },
    ],
  },
]
<\/script>`
}

export function createTopSidebarCodeJs(_l: MenuDemoLabels): string {
	return `<template>
  <idea-menu layout="top-sidebar" v-model="active" :menus="menus">
${slotsExample}  </idea-menu>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('ts1-1')
const menus = [/* ... */]
<\/script>`
}

// ==================== Double Sidebar ====================
export function createDoubleSidebarCodeTs(l: MenuDemoLabels): string {
	return `<template>
  <idea-menu
    layout="double-sidebar"
    v-model="active"
    :menus="menus"
    :width="180"
  >
${slotsExample}  </idea-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('d1-1')
const menus = [
  {
    id: 'd1', label: '${l.workbench}', icon: 'icon-computer',
    children: [
      { id: 'd1-1', label: '${l.overview}' },
      { id: 'd1-2', label: '${l.analytics}' },
    ],
  },
  {
    id: 'd2', label: '${l.system}', icon: 'icon-shezhi',
    children: [
      { id: 'd2-1', label: '${l.userMgmt}' },
      { id: 'd2-2', label: '${l.roleMgmt}' },
    ],
  },
]
<\/script>`
}

export function createDoubleSidebarCodeJs(_l: MenuDemoLabels): string {
	return `<template>
  <idea-menu layout="double-sidebar" v-model="active" :menus="menus" :width="180">
${slotsExample}  </idea-menu>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('d1-1')
const menus = [/* ... */]
<\/script>`
}

// ==================== Breadcrumb ====================
export function createBreadcrumbCodeTs(l: MenuDemoLabels): string {
	return `<template>
  <div class="layout">
    <idea-menu layout="sidebar" v-model="active" :menus="menus" collapsible />
    <div class="main">
      <div class="header">
        <idea-breadcrumb :items="breadcrumbs" separator="/" @click="onBreadcrumbClick" />
      </div>
      <div class="content">当前页面：{{ currentLabel }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { findMenuPath } from 'idea-ui'

const active = ref('2-4-1')
${sidebarMenusCode(l)}
const breadcrumbs = computed(() =>
  findMenuPath(menus, active.value).map((item) => ({
    label: item.label,
    path: item.path,
  }))
)

const currentLabel = computed(() => breadcrumbs.value[breadcrumbs.value.length - 1]?.label ?? '')

function onBreadcrumbClick(item: { label: string; path?: string }, index: number) {
  const path = findMenuPath(menus, active.value)
  active.value = path[index].id
}
<\/script>

<style scoped>
.layout {
  display: flex;
  height: 360px;
  border: 1px solid #EBEEF5;
  border-radius: 4px;
  overflow: hidden;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.header {
  padding: 13px 16px;
  border-bottom: 1px solid #EBEEF5;
}
.content {
  flex: 1;
  padding: 24px;
  font-size: 14px;
  color: #606266;
}
</style>`
}

export function createBreadcrumbCodeJs(l: MenuDemoLabels): string {
	return `<template>
  <div class="layout">
    <idea-menu layout="sidebar" v-model="active" :menus="menus" collapsible />
    <div class="main">
      <div class="header">
        <idea-breadcrumb :items="breadcrumbs" separator="/" @click="onBreadcrumbClick" />
      </div>
      <div class="content">当前页面：{{ currentLabel }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { findMenuPath } from 'idea-ui'

const active = ref('2-4-1')
${sidebarMenusCode(l)}
const breadcrumbs = computed(() =>
  findMenuPath(menus, active.value).map((item) => ({ label: item.label, path: item.path }))
)

const currentLabel = computed(() => breadcrumbs.value[breadcrumbs.value.length - 1]?.label ?? '')

function onBreadcrumbClick(item, index) {
  const path = findMenuPath(menus, active.value)
  active.value = path[index].id
}
<\/script>

<style scoped>
.layout {
  display: flex;
  height: 360px;
  border: 1px solid #EBEEF5;
  border-radius: 4px;
  overflow: hidden;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.header {
  padding: 13px 16px;
  border-bottom: 1px solid #EBEEF5;
}
.content {
  flex: 1;
  padding: 24px;
  font-size: 14px;
  color: #606266;
}
</style>`
}
