import { languages } from "@/assets/translations/languages";
import { SidebarTrigger } from "@/components/ui/sidebar";
import RBreadcrumb from "@/RComponents/RBreadcrumb";
import RDropdown from "@/RComponents/RDropDown";
import RFlex from "@/RComponents/RFlex";
import { ThemeContext } from "@/Views/Dashboard/Dashboard";
import { Separator } from "@radix-ui/react-separator";
import { Globe, Languages, Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
const RNavbar = () => {
  const themeContext = useContext(ThemeContext);
  const LangElement = ({
    title,
    img,
    className,
  }: {
    title: string;
    img: any;
    className?: string;
  }) => {
    return (
      <>
        <img src={img} className="w-3 h-3 opacity-85" />
        <span>{title}</span>
      </>
    );
  };
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
        <RDropdown
          triggerComponent={
            <Globe className="w-4 h-4 hover:text-muted-foreground/75" />
          }
          side="bottom"
          align="center"
          actions={languages.map((lang) => ({
            ...lang,
            component: <LangElement title={lang.name} img={lang.icon} />,
          }))}
          contentClassName="min-w-fit w-max"
        />
        {themeContext?.theme == "dark" ? (
          <Sun
            className="w-4 h-4 hover:text-muted-foreground/75 cursor-pointer"
            onClick={() => themeContext && themeContext.toggleTheme("")}
          />
        ) : (
          <Moon
            className="w-4 h-4 hover:text-muted-foreground/75 cursor-pointer"
            onClick={() => themeContext && themeContext.toggleTheme("dark")}
          />
        )}
      </RFlex>
    </header>
  );
};

export default RNavbar;
