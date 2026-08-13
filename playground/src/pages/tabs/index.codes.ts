export interface BasicCodeLabels {
	tab1: string
	tab2: string
	tab3: string
	content: string
}

const basicCodeTemplate = (l: BasicCodeLabels) => `<template>
  <idea-tabs :tabs="tabs" v-model="activeTab">
    <p>${l.content}</p>
  </idea-tabs>
</template>
`

const basicTabsCode = (l: BasicCodeLabels) => `const tabs = [
  { name: 'tab1', label: '${l.tab1}' },
  { name: 'tab2', label: '${l.tab2}' },
  { name: 'tab3', label: '${l.tab3}' },
]
`

export function createBasicCodeTs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate(l)}
<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('tab1')
${basicTabsCode(l)}<\/script>`
}

export function createBasicCodeJs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate(l)}
<script setup>
import { ref } from 'vue'

const activeTab = ref('tab1')
${basicTabsCode(l)}<\/script>`
}
