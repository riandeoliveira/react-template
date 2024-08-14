"use client";

import { Icon } from "@/assets/icons";
import { loadingStore } from "@/stores/loading-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

export const LoadingProvider = observer((): ReactElement => {
  return (
    <>
      {loadingStore.isLoading && (
        <div className="items-center flex h-full justify-center left-0 fixed top-0 w-full z-50 bg-zinc-950/50">
          <Icon.LoaderCircle size="48" className="animate-spin" />
        </div>
      )}
    </>
  );
});
