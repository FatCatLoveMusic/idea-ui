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

const sidebarLogo =
	'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A+simple+modern+logo+for+a+tech+company%2C+minimalist+design%2C+abstract+geometric+shape%2C+orange+and+white+color+scheme%2C+square+icon&image_size=square_hd'

const sidebarCodeTemplate = `<template>
  <idea-menu
    layout="sidebar"
    v-model="active"
    :menus="menus"
    collapsible
    logo="${sidebarLogo}"
  >
    <template #footer>
      <div style="padding: 8px; text-align: center; font-size: 12px; color: #999">Footer Area</div>
    </template>
  </idea-menu>
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
    <template #logo>
      <span style="font-weight: bold">Logo</span>
    </template>
    <template #header-extra>
      <el-avatar :size="28" />
      <span>Admin</span>
    </template>
  </idea-menu>
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
    <template #logo><span>Logo</span></template>
  </idea-menu>
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
    <template #logo>
      <span style="font-weight: bold">MyApp</span>
    </template>
  </idea-menu>
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
    <template #logo><span>MyApp</span></template>
  </idea-menu>
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
    <template #logo>
      <span style="font-weight: bold">Platform</span>
    </template>
  </idea-menu>
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
    <template #logo><span>Platform</span></template>
  </idea-menu>
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
    <template #bottom>
      <div style="padding: 8px; text-align: center; cursor: pointer">
        <i class="el-icon-setting"></i>
        <span style="font-size: 12px">Settings</span>
      </div>
    </template>
  </idea-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('d1-1')
const menus = [
  {
    id: 'd1', label: '${l.workbench}', icon: 'el-icon-monitor',
    children: [
      { id: 'd1-1', label: '${l.overview}' },
      { id: 'd1-2', label: '${l.analytics}' },
    ],
  },
  {
    id: 'd2', label: '${l.system}', icon: 'el-icon-setting',
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
    <template #bottom><div>Settings</div></template>
  </idea-menu>
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
      <idea-breadcrumb :items="breadcrumbs" separator="/" @click="onBreadcrumbClick" />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { findMenuPath } from 'idea-ui'

const active = ref('2-4-1')

const menus = [
  {
    id: '2', label: '${l.system}', path: '/system',
    children: [
      {
        id: '2-4', label: '${l.sysConfig}', path: '/system/config',
        children: [
          { id: '2-4-1', label: '${l.baseConfig}', path: '/system/config/base' },
          { id: '2-4-2', label: '${l.security}', path: '/system/config/security' },
        ],
      },
    ],
  },
]

const breadcrumbs = computed(() =>
  findMenuPath(menus, active.value).map((item) => ({
    label: item.label,
    path: item.path,
  }))
)

function onBreadcrumbClick(item: { label: string; path?: string }, index: number) {
  const path = findMenuPath(menus, active.value)
  active.value = path[index].id
}
<\/script>`
}

export function createBreadcrumbCodeJs(l: MenuDemoLabels): string {
	return `<template>
  <div class="layout">
    <idea-menu layout="sidebar" v-model="active" :menus="menus" collapsible />
    <div class="main">
      <idea-breadcrumb :items="breadcrumbs" separator="/" @click="onBreadcrumbClick" />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { findMenuPath } from 'idea-ui'

const active = ref('2-4-1')

const menus = [
  {
    id: '2', label: '${l.system}', path: '/system',
    children: [
      {
        id: '2-4', label: '${l.sysConfig}', path: '/system/config',
        children: [
          { id: '2-4-1', label: '${l.baseConfig}', path: '/system/config/base' },
          { id: '2-4-2', label: '${l.security}', path: '/system/config/security' },
        ],
      },
    ],
  },
]

const breadcrumbs = computed(() =>
  findMenuPath(menus, active.value).map((item) => ({ label: item.label, path: item.path }))
)

function onBreadcrumbClick(item, index) {
  const path = findMenuPath(menus, active.value)
  active.value = path[index].id
}
<\/script>`
}
