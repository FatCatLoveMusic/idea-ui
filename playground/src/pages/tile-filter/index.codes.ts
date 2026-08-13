export interface BasicCodeLabels {
	all: string
	pending: string
	approved: string
}

const basicCodeTemplate = `<template>
  <idea-tile-filter :filters="filters" v-model="active" />
</template>
`

const basicFiltersCode = (l: BasicCodeLabels) => `const filters = [
  { label: '${l.all}', value: 'all', count: 20 },
  { label: '${l.pending}', value: 'pending', count: 5 },
  { label: '${l.approved}', value: 'approved', count: 12 },
]
`

export function createBasicCodeTs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate}
<script setup lang="ts">
import { ref } from 'vue'

const active = ref('all')
${basicFiltersCode(l)}<\/script>`
}

export function createBasicCodeJs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate}
<script setup>
import { ref } from 'vue'

const active = ref('all')
${basicFiltersCode(l)}<\/script>`
}
