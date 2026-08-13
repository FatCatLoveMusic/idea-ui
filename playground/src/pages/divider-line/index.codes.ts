// ==================== Basic ====================
// 示例代码跟随当前语言（zh-cn / en / zh-tw）生成，与页面示例保持一致
export interface DividerLineCodeLabels {
	area1: string
	area2: string
	area3: string
	text: string
	item1: string
	item2: string
	item3: string
}

export function createBasicCodeTs(l: DividerLineCodeLabels): string {
	return `<template>
  <p>${l.area1}</p>
  <idea-divider-line />
  <p>${l.area2}</p>
  <idea-divider-line text="${l.text}" />
  <p>${l.area3}</p>
</template>`
}

export function createBasicCodeJs(l: DividerLineCodeLabels): string {
	return `<template>
  <p>${l.area1}</p>
  <idea-divider-line />
  <p>${l.area2}</p>
  <idea-divider-line text="${l.text}" />
  <p>${l.area3}</p>
</template>`
}

export function createVerticalCodeTs(l: DividerLineCodeLabels): string {
	return `<template>
  <span>${l.item1}</span>
  <idea-divider-line direction="vertical" />
  <span>${l.item2}</span>
  <idea-divider-line direction="vertical" />
  <span>${l.item3}</span>
</template>`
}

export function createVerticalCodeJs(l: DividerLineCodeLabels): string {
	return `<template>
  <span>${l.item1}</span>
  <idea-divider-line direction="vertical" />
  <span>${l.item2}</span>
  <idea-divider-line direction="vertical" />
  <span>${l.item3}</span>
</template>`
}
