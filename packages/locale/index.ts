import type { App } from 'vue'
import { ref, type Ref } from 'vue'
import zhCN from './zh-cn'

export type Language = 'zh-cn' | 'zh-tw' | 'en'

export interface LocaleMessages {
	[key: string]: string | LocaleMessages
}

/**
 * 语言包结构，与 element-plus 的 locale 一致：
 * 通过 `import zhCN from 'idea-ui/locale/zh-cn'` 按需引入，
 * 再传给 `app.use(IdeaUI, { locale: zhCN })`。
 */
export interface LanguagePack extends LocaleMessages {
	name: Language
}

const LOCALE_KEY = Symbol('idea-ui-locale')

const currentLocale: Ref<Language> = ref('zh-cn')
const messages: Record<string, LocaleMessages> = {}

// 默认注册简体中文语言包，作为其他语言缺失时的兜底
messages['zh-cn'] = zhCN

export function useLocale() {
	return {
		locale: currentLocale,
		setLocale,
		t: translate,
	}
}

export function setLocale(lang: Language) {
	currentLocale.value = lang
}

export function loadMessages(lang: Language, msgs: LocaleMessages) {
	messages[lang] = msgs
}

export function translate(key: string, replacements?: Record<string, string>): string {
	const lang = currentLocale.value
	const keys = key.split('.')
	let result: LocaleMessages | string | undefined = messages[lang] ?? messages['zh-cn']
	for (const k of keys) {
		if (result && typeof result === 'object') {
			result = (result as LocaleMessages)[k]
		} else {
			return key
		}
	}
	let text = typeof result === 'string' ? result : key
	if (replacements) {
		Object.entries(replacements).forEach(([k, v]) => {
			text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v)
		})
	}
	return text
}

export const localePlugin = {
	install(
		app: App,
		options?: { locale?: Language | LanguagePack; messages?: Record<string, LocaleMessages> }
	) {
		if (options?.locale) {
			if (typeof options.locale === 'string') {
				setLocale(options.locale)
			} else {
				loadMessages(options.locale.name, options.locale)
				setLocale(options.locale.name)
			}
		}
		if (options?.messages) {
			Object.entries(options.messages).forEach(([lang, msgs]) => {
				loadMessages(lang as Language, msgs)
			})
		}
		app.provide(LOCALE_KEY, currentLocale)
	}
}
