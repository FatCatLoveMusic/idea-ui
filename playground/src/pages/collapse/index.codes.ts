// ==================== Basic ====================
// 示例代码跟随当前语言（zh-cn / en / zh-tw）生成，与页面示例保持一致
export interface CollapseCodeLabels {
	content: string
	consistency: string
	feedback: string
	efficiency: string
}

const collapseCodeTemplate = (l: CollapseCodeLabels) => `<template>
  <idea-collapse :items="items" v-model="activeNames">
    <p>${l.content}</p>
  </idea-collapse>
</template>
`

const collapseScriptCode = (l: CollapseCodeLabels) => `import { ref } from 'vue'

const activeNames = ref(['1'])
const items = [
  { name: '1', title: '${l.consistency}' },
  { name: '2', title: '${l.feedback}' },
  { name: '3', title: '${l.efficiency}' },
]
`

export function createCollapseCodeTs(l: CollapseCodeLabels): string {
	return `${collapseCodeTemplate(l)}
<script setup lang="ts">
${collapseScriptCode(l)}<\/script>`
}

export function createCollapseCodeJs(l: CollapseCodeLabels): string {
	return `${collapseCodeTemplate(l)}
<script setup>
${collapseScriptCode(l)}<\/script>`
}
