export interface BasicCodeLabels {}

export function createBasicCodeTs(_l: BasicCodeLabels): string {
	return `<template>
  <idea-no-data />
</template>`
}

export function createBasicCodeJs(_l: BasicCodeLabels): string {
	return `<template>
  <idea-no-data />
</template>`
}

export interface CustomCodeLabels {
	customText: string
}

export function createCustomCodeTs(l: CustomCodeLabels): string {
	return `<template>
  <idea-no-data text="${l.customText}" />
</template>`
}

export function createCustomCodeJs(l: CustomCodeLabels): string {
	return `<template>
  <idea-no-data text="${l.customText}" />
</template>`
}
