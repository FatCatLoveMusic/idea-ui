/**
 * 显示 loading 状态
 * @param show 是否显示
 */
export function showLoading(show: boolean): void {
  if (show) {
    let loading = document.getElementById('idea-loading')
    if (!loading) {
      loading = document.createElement('div')
      loading.id = 'idea-loading'
      loading.className = 'idea-loading'
      loading.innerHTML = '<div class="idea-loading-spinner"></div>'
      document.body.appendChild(loading)
    }
    loading.style.display = 'flex'
  } else {
    hideLoading()
  }
}

/**
 * 隐藏 loading 状态
 */
export function hideLoading(): void {
  const loading = document.getElementById('idea-loading')
  if (loading) {
    loading.remove()
  }
}