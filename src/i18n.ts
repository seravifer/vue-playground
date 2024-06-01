import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  locale: "es",
  numberFormats: {
    es: {
      km: {
        style: "unit",
        unit: "kilometer",
        maximumFractionDigits: 2,
      },
      currency: {
        style: "currency",
        currency: "EUR",
        currencyDisplay: "symbol",
      },
    },
  },
});
