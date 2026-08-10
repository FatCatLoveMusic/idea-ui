import type { App } from 'vue'
import { ref, inject, computed, type Ref, type ComputedRef } from 'vue'

export type Language = 'zh-cn' | 'zh-tw' | 'en'

export interface LocaleMessages {
	[key: string]: string | LocaleMessages
}

const LOCALE_KEY = Symbol('idea-ui-locale')

let currentLocale: Ref<Language> = ref('zh-cn')
let messages: Record<string, LocaleMessages> = {}

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
	const keys = key.split('.')
	let result: any = messages[currentLocale.value]
	for (const k of keys) {
		if (result && typeof result === 'object') {
			result = result[k]
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
	install(app: App, options?: { locale?: Language; messages?: Record<string, LocaleMessages> }) {
		if (options?.locale) {
			setLocale(options.locale)
		}
		if (options?.messages) {
			Object.entries(options.messages).forEach(([lang, msgs]) => {
				loadMessages(lang as Language, msgs)
			})
		}
		app.provide(LOCALE_KEY, currentLocale)
	}
}