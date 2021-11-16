import type { LocaleMessage } from "@intlify/core-base";
import Vue from "vue";
import VueI18n from "vue-i18n";
import type { I18n, VueMessageType } from "vue-i18n-bridge";
import { castToVueI18n, createI18n } from "vue-i18n-bridge";

Vue.use(VueI18n, { bridge: true });

export type I18nMessages = {
  en: LocaleMessage<VueMessageType>;
};

export interface I18nDateTimeFormats {}

export interface I18nNumberFormats {}

export type I18nOptionLocale = never;

const i18n: I18n<
  I18nMessages,
  I18nDateTimeFormats,
  I18nNumberFormats,
  I18nOptionLocale,
  true
> = createI18n(
  {
    locale: "en",
    messages: {
      en: {
        message: "Hello",
      },
    },
  },
  VueI18n
);

Vue.use(i18n);

export default castToVueI18n(i18n);
