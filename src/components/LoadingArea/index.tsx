import { CircularProgress } from "@mui/material";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { loadingStore } from "store/loading.store";
import styles from "./styles.module.scss";

export const LoadingArea = observer((): ReactElement => {
  const { isLoading } = loadingStore;

  return (
    <>
      {isLoading ? (
        <div className={styles.container}>
          <CircularProgress />
        </div>
      ) : (
        <></>
      )}
    </>
  );
});
