/**
 * 关闭表单中的错误提示
 * @param selector 表单选择器
 */
export function closeWarningTips(selector?: string): void {
  const formEl = selector ? document.querySelector(selector) : document
  if (!formEl) return
  const warnings = formEl.querySelectorAll('.el-form-item__error')
  warnings.forEach((w) => {
    ;(w as HTMLElement).style.display = 'none'
  })
}