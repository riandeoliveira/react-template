import { Icon } from "@/assets/icons";
import { useLoadingStore } from "@/stores/use-loading-store";
import type { ReactElement } from "react";

export const LoadingProvider = (): ReactElement => {
  const loadingStore = useLoadingStore();

  return (
    <>
      {loadingStore.isLoading && (
        <div className="items-center flex h-full justify-center left-0 fixed top-0 w-full z-50 bg-zinc-950/50">
          <Icon.LoaderCircle size="48" className="animate-spin" />
        </div>
      )}
    </>
  );
};
