import useLocalStorage from "use-local-storage";

type UseSidebar = {
  isSidebarOpen: boolean;

  toggleSidebar: () => void;
};

export const useSidebar = (): UseSidebar => {
  const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage<boolean>("is_sidebar_open", true);

  const toggleSidebar = (): void => {
    setIsSidebarOpen((previousValue) => !previousValue);
  };

  return {
    isSidebarOpen,
    toggleSidebar,
  };
};
