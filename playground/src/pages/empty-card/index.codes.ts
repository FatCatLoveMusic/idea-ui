export interface BasicCodeLabels {}

export function createBasicCodeTs(_l: BasicCodeLabels): string {
	return `<template>
  <idea-empty-card />
</template>`
}

export function createBasicCodeJs(_l: BasicCodeLabels): string {
	return `<template>
  <idea-empty-card />
</template>`
}

export interface CustomCodeLabels {
	customText: string
}

export function createCustomCodeTs(l: CustomCodeLabels): string {
	return `<template>
  <idea-empty-card text="${l.customText}" />
</template>`
}

export function createCustomCodeJs(l: CustomCodeLabels): string {
	return `<template>
  <idea-empty-card text="${l.customText}" />
</template>`
}
