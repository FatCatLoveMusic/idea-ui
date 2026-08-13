export interface BasicCodeLabels {
	event1: string
	event2: string
	event3: string
	description: string
}

const basicCodeTemplate = `<template>
  <idea-timeline :items="items" />
</template>
`

const timelineItemsCode = (l: BasicCodeLabels) => `const items = [
  { title: '${l.event1}', time: '2024-01-01', type: 'success' },
  { title: '${l.event2}', time: '2024-02-01', type: 'primary' },
  { title: '${l.event3}', time: '2024-03-01', description: '${l.description}' },
]
`

export function createBasicCodeTs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate}
<script setup lang="ts">
${timelineItemsCode(l)}<\/script>`
}

export function createBasicCodeJs(l: BasicCodeLabels): string {
	return `${basicCodeTemplate}
<script setup>
${timelineItemsCode(l)}<\/script>`
}
