import { useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "@/hooks/use-theme";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { isMobile } = useSidebar();
  // const { theme } = useTheme();
  // console.log("mobile", theme);
  return (
    <>
      this is users
      <Outlet />
    </>
  );
};

export default Home;
