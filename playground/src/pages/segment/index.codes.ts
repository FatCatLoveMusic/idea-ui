export interface BasicCodeLabels {
	optionA: string
	optionB: string
	optionC: string
}

const basicCodeTemplate = `<template>
  <idea-segment :options="options" v-model="active" />
</template>
`

const basicOptionsCode = (l: BasicCodeLabels) => `const options = [
  { label: '${l.optionA}', value: 'a' },
  { label: '${l.optionB}', value: 'b' },
  { label: '${l.optionC}', value: 'c' },
]
`

export function createBasicCodeTs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate}
<script setup lang="ts">
import { ref } from 'vue'

const active = ref('a')
${basicOptionsCode(l)}<\/script>`
}

export function createBasicCodeJs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate}
<script setup>
import { ref } from 'vue'

const active = ref('a')
${basicOptionsCode(l)}<\/script>`
}
