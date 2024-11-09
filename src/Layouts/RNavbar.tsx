import { SidebarTrigger } from "@/components/ui/sidebar";
import RBreadcrumb from "@/RComponents/RBreadcrumb";
import RFlex from "@/RComponents/RFlex";
import { ThemeContext } from "@/Views/Dashboard/Dashboard";
import { Separator } from "@radix-ui/react-separator";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
const RNavbar = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <header
      id="header"
      className="border-b-[1px] border-accent sticky top-0 bg-background flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
    >
      <div id="trigger/breadcrumb" className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <RBreadcrumb />
      </div>
      <RFlex
        id="language/theme"
        className="absolute right-[5%] flex-row-reverse"
      >
        {themeContext?.theme == "dark" ? (
          <Sun
            className="w-4 h-4 hover:text-accent cursor-pointer"
            onClick={() => themeContext && themeContext.toggleTheme("")}
          />
        ) : (
          <Moon
            className="w-4 h-4 hover:text-accent cursor-pointer"
            onClick={() => themeContext && themeContext.toggleTheme("dark")}
          />
        )}
      </RFlex>
    </header>
  );
};

export default RNavbar;
