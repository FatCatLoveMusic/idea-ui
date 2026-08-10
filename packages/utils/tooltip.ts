/**
 * 在指定元素上显示 tooltip 提示
 * @param el 目标元素
 * @param text 提示文本
 * @param opts 可选配置
 */
export function tips(el: HTMLElement, text: string, opts?: { placement?: string }): void {
	closeTips(el)
	const placement = opts?.placement || 'top'
	const tipEl = document.createElement('div')
	tipEl.className = 'idea-tooltip idea-tooltip-' + placement
	tipEl.innerHTML = text
	tipEl.setAttribute('data-tips', 'true')
	document.body.appendChild(tipEl)

	const rect = el.getBoundingClientRect()
	const tipRect = tipEl.getBoundingClientRect()

	switch (placement) {
		case 'top':
			tipEl.style.top = rect.top - tipRect.height - 8 + 'px'
			tipEl.style.left = rect.left + rect.width / 2 - tipRect.width / 2 + 'px'
			break
		case 'bottom':
			tipEl.style.top = rect.bottom + 8 + 'px'
			tipEl.style.left = rect.left + rect.width / 2 - tipRect.width / 2 + 'px'
			break
		case 'left':
			tipEl.style.top = rect.top + rect.height / 2 - tipRect.height / 2 + 'px'
			tipEl.style.left = rect.left - tipRect.width - 8 + 'px'
			break
		case 'right':
			tipEl.style.top = rect.top + rect.height / 2 - tipRect.height / 2 + 'px'
			tipEl.style.left = rect.right + 8 + 'px'
			break
	}
}

/**
 * 关闭 tooltip 提示
 * @param el 目标元素
 */
export function closeTips(el?: HTMLElement): void {
	const tips = document.querySelectorAll('[data-tips]')
	tips.forEach((tip) => tip.remove())
}