import "i18next";
import type enUs from "@/locales/en-us.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof enUs;
    };
  }
}
