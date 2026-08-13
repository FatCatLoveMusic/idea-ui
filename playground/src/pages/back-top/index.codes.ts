// ==================== Basic ====================
// 示例代码跟随当前语言（zh-cn / en / zh-tw）生成，与页面示例保持一致
export interface BackTopCodeLabels {
	row: string
}

const backTopCodeTemplate = (l: BackTopCodeLabels) => `<template>
  <div ref="scrollContainer" style="height: 300px; overflow-y: auto;">
    <p v-for="i in 20" :key="i">${l.row} {{ i }}</p>
    <idea-back-top :visibility-height="100" :target="getScrollContainer" />
  </div>
</template>
`

export function createBackTopCodeTs(l: BackTopCodeLabels): string {
	return `${backTopCodeTemplate(l)}
<script setup lang="ts">
import { ref } from 'vue'

const scrollContainer = ref<HTMLElement | null>(null)

const getScrollContainer = () => scrollContainer.value
<\/script>`
}

export function createBackTopCodeJs(l: BackTopCodeLabels): string {
	return `${backTopCodeTemplate(l)}
<script setup>
import { ref } from 'vue'

const scrollContainer = ref(null)

const getScrollContainer = () => scrollContainer.value
<\/script>`
}
