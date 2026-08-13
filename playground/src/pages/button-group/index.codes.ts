export interface BasicCodeLabels {
	day: string
	week: string
	month: string
}

const basicCodeTemplate = `<template>
  <idea-button-group :buttons="buttons" v-model="active" />
</template>
`

const basicButtonsCode = (l: BasicCodeLabels) => `const buttons = [
  { label: '${l.day}', value: 'day' },
  { label: '${l.week}', value: 'week' },
  { label: '${l.month}', value: 'month' },
]
`

export function createBasicCodeTs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate}
<script setup lang="ts">
import { ref } from 'vue'

const active = ref('day')
${basicButtonsCode(l)}<\/script>`
}

export function createBasicCodeJs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate}
<script setup>
import { ref } from 'vue'

const active = ref('day')
${basicButtonsCode(l)}<\/script>`
}
