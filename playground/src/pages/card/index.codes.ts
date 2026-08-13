export interface BasicCodeLabels {
	cardTitle: string
	content: string
	footer: string
}

export function createBasicCodeTs(l: BasicCodeLabels): string {
	return `<template>
  <idea-card title="${l.cardTitle}">
    <p>${l.content}</p>
    <template #footer>
      <span style="color: #909399;">${l.footer}</span>
    </template>
  </idea-card>
</template>`
}

export function createBasicCodeJs(l: BasicCodeLabels): string {
	return `<template>
  <idea-card title="${l.cardTitle}">
    <p>${l.content}</p>
    <template #footer>
      <span style="color: #909399;">${l.footer}</span>
    </template>
  </idea-card>
</template>`
}
