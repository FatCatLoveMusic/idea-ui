export interface BasicCodeLabels {
	all: string
	pending: string
	done: string
}

const basicCodeTemplate = `<template>
  <idea-table-tabs :tabs="tabs" v-model="active" />
</template>
`

const basicTabsCode = (l: BasicCodeLabels) => `const tabs = [
  { label: '${l.all}', value: 'all', count: 100 },
  { label: '${l.pending}', value: 'pending', count: 10 },
  { label: '${l.done}', value: 'done', count: 90 },
]
`

export function createBasicCodeTs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate}
<script setup lang="ts">
import { ref } from 'vue'

const active = ref('all')
${basicTabsCode(l)}<\/script>`
}

export function createBasicCodeJs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate}
<script setup>
import { ref } from 'vue'

const active = ref('all')
${basicTabsCode(l)}<\/script>`
}
