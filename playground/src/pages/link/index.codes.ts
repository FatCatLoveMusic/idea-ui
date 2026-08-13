export interface BasicCodeLabels {
	openBaidu: string
}

export function createBasicCodeTs(l: BasicCodeLabels): string {
	return `<template>
  <idea-link href="https://www.baidu.com" target="_blank">${l.openBaidu}</idea-link>
</template>`
}

export function createBasicCodeJs(l: BasicCodeLabels): string {
	return `<template>
  <idea-link href="https://www.baidu.com" target="_blank">${l.openBaidu}</idea-link>
</template>`
}
