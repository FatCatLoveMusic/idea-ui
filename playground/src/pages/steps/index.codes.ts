export interface StepsCodeLabels {
	step1: string
	step2: string
	step3: string
	description: string
}

const basicCodeTemplate = `<template>
  <idea-steps :steps="steps" :active="active" />
</template>
`

const stepsCode = (l: StepsCodeLabels) => `const steps = [
  { title: '${l.step1}', description: '${l.description}' },
  { title: '${l.step2}', description: '${l.description}' },
  { title: '${l.step3}' },
]
`

export function createBasicCodeTs(l: StepsCodeLabels): string {
	return `${basicCodeTemplate}
<script setup lang="ts">
${stepsCode(l)}const active = 0
<\/script>`
}

export function createBasicCodeJs(l: StepsCodeLabels): string {
	return `${basicCodeTemplate}
<script setup>
${stepsCode(l)}const active = 0
<\/script>`
}

export function createProgressCodeTs(l: StepsCodeLabels): string {
	return `${basicCodeTemplate}
<script setup lang="ts">
${stepsCode(l)}const active = 2
<\/script>`
}

export function createProgressCodeJs(l: StepsCodeLabels): string {
	return `${basicCodeTemplate}
<script setup>
${stepsCode(l)}const active = 2
<\/script>`
}
