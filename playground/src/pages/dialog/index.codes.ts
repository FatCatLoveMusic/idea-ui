export interface DialogCodeLabels {
	open: string
	openFooter: string
	title: string
	content: string
	confirmTitle: string
	confirmText: string
	cancel: string
	confirm: string
}

export function createBasicCodeTs(l: DialogCodeLabels): string {
	return `<template>
  <el-button @click="visible = true">${l.open}</el-button>
  <idea-dialog v-model="visible" title="${l.title}">
    <p>${l.content}</p>
    <p>${l.content}</p>
    <p>${l.content}</p>
  </idea-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
<\/script>`
}

export function createBasicCodeJs(l: DialogCodeLabels): string {
	return `<template>
  <el-button @click="visible = true">${l.open}</el-button>
  <idea-dialog v-model="visible" title="${l.title}">
    <p>${l.content}</p>
    <p>${l.content}</p>
    <p>${l.content}</p>
  </idea-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
<\/script>`
}

export function createFooterCodeTs(l: DialogCodeLabels): string {
	return `<template>
  <el-button type="primary" @click="visible = true">${l.openFooter}</el-button>
  <idea-dialog v-model="visible" title="${l.confirmTitle}">
    <p>${l.confirmText}</p>
    <template #footer>
      <el-button @click="visible = false">${l.cancel}</el-button>
      <el-button type="primary" @click="visible = false">${l.confirm}</el-button>
    </template>
  </idea-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
<\/script>`
}

export function createFooterCodeJs(l: DialogCodeLabels): string {
	return `<template>
  <el-button type="primary" @click="visible = true">${l.openFooter}</el-button>
  <idea-dialog v-model="visible" title="${l.confirmTitle}">
    <p>${l.confirmText}</p>
    <template #footer>
      <el-button @click="visible = false">${l.cancel}</el-button>
      <el-button type="primary" @click="visible = false">${l.confirm}</el-button>
    </template>
  </idea-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
<\/script>`
}
