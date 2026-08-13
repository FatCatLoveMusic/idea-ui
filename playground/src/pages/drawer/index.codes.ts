export interface DrawerCodeLabels {
	open: string
	title: string
	content: string
	right: string
	left: string
	top: string
	bottom: string
}

export function createBasicCodeTs(l: DrawerCodeLabels): string {
	return `<template>
  <el-button @click="visible = true">${l.open}</el-button>
  <idea-drawer v-model="visible" title="${l.title}">
    <p>${l.content}</p>
  </idea-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
<\/script>`
}

export function createBasicCodeJs(l: DrawerCodeLabels): string {
	return `<template>
  <el-button @click="visible = true">${l.open}</el-button>
  <idea-drawer v-model="visible" title="${l.title}">
    <p>${l.content}</p>
  </idea-drawer>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
<\/script>`
}

export function createDirectionCodeTs(l: DrawerCodeLabels): string {
	return `<template>
  <el-button v-for="p in placements" :key="p.value" @click="open(p.value)">
    {{ p.label }}
  </el-button>
  <idea-drawer v-model="visible" :placement="placement" title="${l.title}">
    <p>${l.content}</p>
  </idea-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Placement = 'left' | 'right' | 'top' | 'bottom'

const visible = ref(false)
const placement = ref<Placement>('right')
const placements: { label: string; value: Placement }[] = [
  { label: '${l.right}', value: 'right' },
  { label: '${l.left}', value: 'left' },
  { label: '${l.top}', value: 'top' },
  { label: '${l.bottom}', value: 'bottom' },
]

function open(value: Placement) {
  placement.value = value
  visible.value = true
}
<\/script>`
}

export function createDirectionCodeJs(l: DrawerCodeLabels): string {
	return `<template>
  <el-button v-for="p in placements" :key="p.value" @click="open(p.value)">
    {{ p.label }}
  </el-button>
  <idea-drawer v-model="visible" :placement="placement" title="${l.title}">
    <p>${l.content}</p>
  </idea-drawer>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const placement = ref('right')
const placements = [
  { label: '${l.right}', value: 'right' },
  { label: '${l.left}', value: 'left' },
  { label: '${l.top}', value: 'top' },
  { label: '${l.bottom}', value: 'bottom' },
]

function open(value) {
  placement.value = value
  visible.value = true
}
<\/script>`
}
