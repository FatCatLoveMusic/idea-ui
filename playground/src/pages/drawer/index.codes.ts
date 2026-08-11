export const basicCodeTs = `<template>
  <el-button @click="visible = true">打开 Drawer</el-button>
  <idea-drawer v-model="visible" title="抽屉标题">
    <p>这里是抽屉的内容区域</p>
  </idea-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>`

export const basicCodeJs = `<template>
  <el-button @click="visible = true">打开 Drawer</el-button>
  <idea-drawer v-model="visible" title="抽屉标题">
    <p>这里是抽屉的内容区域</p>
  </idea-drawer>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>`

export const directionCodeTs = `<template>
  <el-button v-for="p in placements" :key="p.value" @click="open(p.value)">
    {{ p.label }}
  </el-button>
  <idea-drawer v-model="visible" :placement="placement" title="抽屉标题">
    <p>这里是抽屉的内容区域</p>
  </idea-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Placement = 'left' | 'right' | 'top' | 'bottom'

const visible = ref(false)
const placement = ref<Placement>('right')
const placements: { label: string; value: Placement }[] = [
  { label: '右侧', value: 'right' },
  { label: '左侧', value: 'left' },
  { label: '顶部', value: 'top' },
  { label: '底部', value: 'bottom' },
]

function open(value: Placement) {
  placement.value = value
  visible.value = true
}
</script>`

export const directionCodeJs = `<template>
  <el-button v-for="p in placements" :key="p.value" @click="open(p.value)">
    {{ p.label }}
  </el-button>
  <idea-drawer v-model="visible" :placement="placement" title="抽屉标题">
    <p>这里是抽屉的内容区域</p>
  </idea-drawer>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const placement = ref('right')
const placements = [
  { label: '右侧', value: 'right' },
  { label: '左侧', value: 'left' },
  { label: '顶部', value: 'top' },
  { label: '底部', value: 'bottom' },
]

function open(value) {
  placement.value = value
  visible.value = true
}
</script>`
