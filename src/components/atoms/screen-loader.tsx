import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/assets";

type ScreenLoaderProps = {
  isLoading: boolean;
};

export const ScreenLoader = ({ isLoading }: ScreenLoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="items-center flex h-full justify-center left-0 fixed top-0 w-full z-50 bg-zinc-950/50"
        >
          <Icon.LoaderCircle className="w-12 h-12 text-zinc-100 animate-spin" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
