/**
 * 获取最大的 z-index 值
 * @param el 当前 DOM 元素
 * @returns 最大的 z-index 值
 */
export function getMaxZIndex(el?: HTMLElement): number {
  let maxZ = 0
  const elements = document.querySelectorAll('body *')
  elements.forEach((elem) => {
    const zIndex = Number(window.getComputedStyle(elem).zIndex)
    if (!isNaN(zIndex) && zIndex > maxZ) {
      maxZ = zIndex
    }
  })
  return Math.max(maxZ + 1, 2000)
}