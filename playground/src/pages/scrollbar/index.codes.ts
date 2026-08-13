// ==================== Basic ====================
// 示例代码跟随当前语言（zh-cn / en / zh-tw）生成，与页面示例保持一致
export interface ScrollbarCodeLabels {
	row: string
}

export function createScrollbarCodeTs(l: ScrollbarCodeLabels): string {
	return `<template>
  <idea-scrollbar style="height: 300px;">
    <p v-for="i in 50" :key="i">${l.row} {{ i }}</p>
  </idea-scrollbar>
</template>`
}

export function createScrollbarCodeJs(l: ScrollbarCodeLabels): string {
	return `<template>
  <idea-scrollbar style="height: 300px;">
    <p v-for="i in 50" :key="i">${l.row} {{ i }}</p>
  </idea-scrollbar>
</template>`
}
