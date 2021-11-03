import { i18n } from "@lingui/core";

export const handleChangeLang = async (locale) => {
	const { messages } = await import(`../locales/${locale}/messages.js`);
	i18n.load(locale, messages);
	i18n.activate(locale);
}