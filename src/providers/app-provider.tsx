import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/hooks/use-i18n";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { language, t } = useI18n();

  return (
    <>
      <Helmet htmlAttributes={{ lang: language }}>
        <meta name="description" content={t("meta_description")} />
      </Helmet>
      {children}
    </>
  );
};
