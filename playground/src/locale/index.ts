import { ref } from 'vue'
import zhCN from './zh-cn'
import zhTW from './zh-tw'
import en from './en'

/**
 * playground 示例的多语言，与组件库的多语言（packages/locale）相互独立。
 * 使用方式：
 *   import { t, setLang, currentLang } from '../../locale'
 *   t('common.sections.basic')
 */
export type PlaygroundLanguage = 'zh-cn' | 'zh-tw' | 'en'

export interface PlaygroundMessages {
	[key: string]: string | PlaygroundMessages
}

const messages: Record<PlaygroundLanguage, PlaygroundMessages> = {
	'zh-cn': zhCN,
	'zh-tw': zhTW,
	en,
}

export const currentLang = ref<PlaygroundLanguage>('zh-cn')

function resolveMessage(obj: PlaygroundMessages | string | undefined, key: string): string {
	const keys = key.split('.')
	let result: PlaygroundMessages | string | undefined = obj
	for (const k of keys) {
		if (result && typeof result === 'object') {
			result = result[k]
		} else {
			return key
		}
	}
	return typeof result === 'string' ? result : key
}

/**
 * 翻译函数，读取 currentLang ref，在模板 / computed 中使用时具备响应式。
 * @param key 形如 'dialog.title'
 * @param replacements 可选插值，如 { index: '1' } 替换文案中的 {index}
 */
export function t(key: string, replacements?: Record<string, string>): string {
	let text = resolveMessage(messages[currentLang.value], key)
	if (replacements) {
		Object.entries(replacements).forEach(([k, v]) => {
			text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v)
		})
	}
	return text
}

export function setLang(lang: PlaygroundLanguage) {
	currentLang.value = lang
}

export function useI18n() {
	return {
		t,
		lang: currentLang,
		setLang,
	}
}
