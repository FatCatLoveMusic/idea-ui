// ==================== Sidebar ====================
export const sidebarCodeTs = `<template>
  <idea-menu
    layout="sidebar"
    v-model="active"
    :menus="menus"
    collapsible
    logo="/logo.png"
  >
    <template #footer>
      <div>Footer Area</div>
    </template>
  </idea-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('1-1')
const menus = [
  {
    id: '1', label: 'Workbench', icon: 'el-icon-monitor',
    children: [
      { id: '1-1', label: 'Overview' },
      { id: '1-2', label: 'Analytics' },
    ],
  },
  {
    id: '2', label: 'System', icon: 'el-icon-setting',
    children: [
      { id: '2-1', label: 'User Mgmt' },
      { id: '2-2', label: 'Role Mgmt' },
      {
        id: '2-3', label: 'Config',
        children: [
          { id: '2-3-1', label: 'Base Config' },
        ],
      },
    ],
  },
]
<\/script>`

export const sidebarCodeJs = `<template>
  <idea-menu
    layout="sidebar"
    v-model="active"
    :menus="menus"
    collapsible
    logo="/logo.png"
  >
    <template #footer>
      <div>Footer Area</div>
    </template>
  </idea-menu>
</template>

<script setup>
import { ref } from 'vue'

const active = ref('1-1')
const menus = [
  {
    id: '1', label: 'Workbench', icon: 'el-icon-monitor',
    children: [
      { id: '1-1', label: 'Overview' },
      { id: '1-2', label: 'Analytics' },
    ],
  },
]
<\/script>`

// ==================== Sidebar Header ====================
export const sidebarHeaderCodeTs = `<template>
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

export const sidebarHeaderCodeJs = `<template>
  <idea-menu layout="sidebar-header" v-model="active" :menus="menus" collapsible>
    <template #logo><span>Logo</span></template>
  </idea-menu>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('1-1')
const menus = [/* ... */]
<\/script>`

// ==================== Top ====================
export const topCodeTs = `<template>
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
    id: 't1', label: 'Workbench',
    children: [
      { id: 't1-1', label: 'Overview' },
      { id: 't1-2', label: 'Analytics' },
    ],
  },
  {
    id: 't2', label: 'System',
    children: [
      { id: 't2-1', label: 'User Mgmt' },
      {
        id: 't2-2', label: 'More',
        children: [
          { id: 't2-2-1', label: 'Base Config' },
        ],
      },
    ],
  },
  { id: 't3', label: 'About' },
]
<\/script>`

export const topCodeJs = `<template>
  <idea-menu layout="top" v-model="active" :menus="menus">
    <template #logo><span>MyApp</span></template>
  </idea-menu>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('t1-1')
const menus = [/* ... */]
<\/script>`

// ==================== Top Sidebar ====================
export const topSidebarCodeTs = `<template>
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
    id: 'ts1', label: 'Workbench',
    children: [
      { id: 'ts1-1', label: 'Overview' },
      { id: 'ts1-2', label: 'Analytics' },
    ],
  },
  {
    id: 'ts2', label: 'System',
    children: [
      { id: 'ts2-1', label: 'User Mgmt' },
      { id: 'ts2-2', label: 'Role Mgmt' },
    ],
  },
]
<\/script>`

export const topSidebarCodeJs = `<template>
  <idea-menu layout="top-sidebar" v-model="active" :menus="menus">
    <template #logo><span>Platform</span></template>
  </idea-menu>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('ts1-1')
const menus = [/* ... */]
<\/script>`

// ==================== Double Sidebar ====================
export const doubleSidebarCodeTs = `<template>
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
    id: 'd1', label: 'Workbench', icon: 'el-icon-monitor',
    children: [
      { id: 'd1-1', label: 'Overview' },
      { id: 'd1-2', label: 'Analytics' },
    ],
  },
  {
    id: 'd2', label: 'System', icon: 'el-icon-setting',
    children: [
      { id: 'd2-1', label: 'User Mgmt' },
      { id: 'd2-2', label: 'Role Mgmt' },
    ],
  },
]
<\/script>`

export const doubleSidebarCodeJs = `<template>
  <idea-menu layout="double-sidebar" v-model="active" :menus="menus" :width="180">
    <template #bottom><div>Settings</div></template>
  </idea-menu>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('d1-1')
const menus = [/* ... */]
<\/script>`

// ==================== Breadcrumb ====================
export const breadcrumbCodeTs = `<template>
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
    id: '2', label: 'System', path: '/system',
    children: [
      {
        id: '2-4', label: 'Config', path: '/system/config',
        children: [
          { id: '2-4-1', label: 'Base Config', path: '/system/config/base' },
          { id: '2-4-2', label: 'Security', path: '/system/config/security' },
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

export const breadcrumbCodeJs = `<template>
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
    id: '2', label: 'System', path: '/system',
    children: [
      {
        id: '2-4', label: 'Config', path: '/system/config',
        children: [
          { id: '2-4-1', label: 'Base Config', path: '/system/config/base' },
          { id: '2-4-2', label: 'Security', path: '/system/config/security' },
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
