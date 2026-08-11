<template>
	<aside class="page-toc">
		<div class="page-toc__title">{{ tocTitle }}</div>
		<nav class="page-toc__nav" v-if="items.length">
			<ul>
				<li v-for="item in items" :key="item.id">
					<a
						:class="{ active: activeId === item.id }"
						:href="`#${item.id}`"
						@click.prevent="scrollTo(item)"
					>
						{{ item.text }}
					</a>
					<ul v-if="item.children.length" class="page-toc__sub">
						<li v-for="child in item.children" :key="child.id">
							<a
								:class="{ active: activeId === child.id }"
								:href="`#${child.id}`"
								@click.prevent="scrollTo(child)"
							>
								{{ child.text }}
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
		<div v-else class="page-toc__empty">{{ tocEmpty }}</div>
	</aside>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { t } from '../locale'

interface TocItem {
	id: string
	text: string
	level: number
	el: HTMLElement
	children: TocItem[]
}

const props = withDefaults(defineProps<{
	/** 内容区域：CSS 选择器或 DOM 元素，组件会扫描其中的 h2/h3 生成目录 */
	container?: string | HTMLElement
	title?: string
	emptyText?: string
	/** 目录高亮判定时的顶部偏移量（配合吸顶导航） */
	offset?: number
}>(), {
	container: '.page-content',
	title: '',
	emptyText: '',
	offset: 80,
})

const tocTitle = computed(() => props.title || t('common.toc.title'))
const tocEmpty = computed(() => props.emptyText || t('common.toc.empty'))

const items = ref<TocItem[]>([])
const activeId = ref('')

let headings: HTMLElement[] = []
let scrollContainer: HTMLElement | Window | null = null
let observer: MutationObserver | null = null
let rafId = 0

function getContainer(): HTMLElement | null {
	if (typeof props.container === 'string') {
		return document.querySelector(props.container)
	}
	return props.container ?? null
}

function findScrollContainer(el: HTMLElement): HTMLElement | Window {
	let node: HTMLElement | null = el
	while (node && node !== document.documentElement) {
		if (node.scrollHeight > node.clientHeight) {
			const overflow = getComputedStyle(node).overflowY
			if (/(auto|scroll|overlay)/.test(overflow)) return node
		}
		node = node.parentElement
	}
	return window
}

function scan() {
	const container = getContainer()
	if (!container) {
		items.value = []
		headings = []
		return
	}

	const nodes = Array.from(container.querySelectorAll<HTMLElement>('h2, h3'))
	headings = nodes.filter((el) => el.textContent && el.textContent.trim().length > 0)
	headings.forEach((el, i) => {
		if (!el.id) el.id = `page-toc-${i}`
	})

	const result: TocItem[] = []
	let current: TocItem | null = null
	headings.forEach((el) => {
		const item: TocItem = {
			id: el.id,
			text: el.textContent!.trim(),
			level: el.tagName === 'H2' ? 1 : 2,
			el,
			children: [],
		}
		if (item.level === 1) {
			result.push(item)
			current = item
		} else if (current) {
			current.children.push(item)
		} else {
			result.push(item)
		}
	})
	items.value = result

	detachScroll()
	scrollContainer = findScrollContainer(container)
	attachScroll()
	updateActive()
}

function getScrollTop(c: HTMLElement | Window): number {
	return c === window ? (window.scrollY || document.documentElement.scrollTop) : c.scrollTop
}

function updateActive() {
	const c = scrollContainer
	if (!c || !headings.length) return
	const cTop = c === window ? 0 : c.getBoundingClientRect().top
	const cScroll = getScrollTop(c)
	let current = headings[0]
	for (const h of headings) {
		const contentTop = h.getBoundingClientRect().top - cTop + cScroll
		if (contentTop <= props.offset) current = h
		else break
	}
	activeId.value = current.id
}

function onScroll() {
	if (rafId) cancelAnimationFrame(rafId)
	rafId = requestAnimationFrame(updateActive)
}

function attachScroll() {
	scrollContainer?.addEventListener('scroll', onScroll, { passive: true })
}

function detachScroll() {
	scrollContainer?.removeEventListener('scroll', onScroll)
	scrollContainer = null
}

function scrollTo(item: TocItem) {
	const el = document.getElementById(item.id)
	if (!el) return
	el.scrollIntoView({ behavior: 'smooth', block: 'start' })
	activeId.value = item.id
}

onMounted(() => {
	scan()
	const container = getContainer()
	if (!container) return
	observer = new MutationObserver(() => {
		nextTick(scan)
	})
	observer.observe(container, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
	detachScroll()
	observer?.disconnect()
	if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped lang="less">
.page-toc {
	width: 200px;
	flex-shrink: 0;
	position: sticky;
	top: 84px;
	max-height: calc(100vh - 120px);
	overflow-y: auto;
	padding-bottom: 24px;

	&__title {
		font-size: 13px;
		font-weight: 600;
		color: var(--idea-color-text-primary);
		padding: 8px 12px;
	}

	&__nav {
		ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}

		a {
			display: block;
			padding: 6px 12px;
			font-size: 13px;
			line-height: 1.4;
			color: var(--idea-color-text-secondary);
			text-decoration: none;
			border-left: 2px solid transparent;
			transition: all 0.2s;

			&:hover {
				color: var(--idea-color-primary);
			}

			&.active {
				color: var(--idea-color-primary);
				border-left-color: var(--idea-color-primary);
				background: rgba(var(--idea-color-primary-rgb), 0.06);
				font-weight: 500;
			}
		}
	}

	&__sub a {
		padding-left: 24px;
		font-size: 12px;
	}

	&__empty {
		font-size: 13px;
		color: var(--idea-color-text-placeholder);
		padding: 8px 12px;
	}
}

// 标题定位时避开吸顶导航
:global(.demo-page h2),
:global(.demo-page h3) {
	scroll-margin-top: 80px;
}

// RTL 适配
:global(.is-rtl) {
	.page-toc a {
		border-left: none;
		border-right: 2px solid transparent;

		&.active {
			border-right-color: var(--idea-color-primary);
		}
	}
}

@media (max-width: 1200px) {
	.page-toc {
		display: none;
	}
}
</style>
