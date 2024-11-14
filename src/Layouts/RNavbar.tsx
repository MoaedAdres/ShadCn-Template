import { LangElement } from "@/assets/translations/languages";
import { SidebarTrigger } from "@/components/ui/sidebar";
import RBreadcrumb from "@/RComponents/RBreadcrumb";
import RCheckDropdown from "@/RComponents/RCheckDropdown";
import RFlex from "@/RComponents/RFlex";
import { CheckActionItem } from "@/types/index.type";
import { DashboardContext } from "@/Views/Dashboard/Dashboard";
import { Separator } from "@radix-ui/react-separator";
import { Globe, Languages, Moon, Sun } from "lucide-react";
import { act, useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ukFlag from "@/assets/icons/uk-flag.png";
import denmarkFlag from "@/assets/icons/denmark-flag.webp";

const RNavbar = ({}) => {
  const dashboardContext = useContext(DashboardContext);
  const { i18n } = useTranslation();

  const languageObject = i18n.options.resources
    ? Object.keys(i18n.options.resources).reduce(
        (result, lang) => {
          result[lang] = {
            checked: lang === dashboardContext.activeLanguage,
            name: lang,
            onCheckedChange: (checkedFlag: boolean) => {
              if (!checkedFlag) dashboardContext.switchLanguage(lang);
            },
            component: (
              <LangElement
                title={lang}
                img={lang === "en" ? ukFlag : lang === "dn" ? denmarkFlag : ""}
              />
            ),
          };
          return result;
        },
        {} as { [key: string]: CheckActionItem }
      )
    : {};

  const [languages, setLanguages] = useState(languageObject);

  return (
    <header
      id="header"
      className="border-b-[1px] border-muted sticky top-0 bg-background flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
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
        <RCheckDropdown
          triggerComponent={
            <Globe className="w-4 h-4 hover:text-muted-foreground/75" />
          }
          itemClassName="pl-6"
          KeepActiveItemChecked
          side="bottom"
          align="center"
          contentClassName="min-w-fit w-max"
          actions={languages}
          setActions={setLanguages}
        />
        {dashboardContext?.theme === "dark" ? (
          <Sun
            className="w-4 h-4 hover:text-muted-foreground/75 cursor-pointer"
            onClick={() => dashboardContext && dashboardContext.toggleTheme("")}
          />
        ) : (
          <Moon
            className="w-4 h-4 hover:text-muted-foreground/75 cursor-pointer"
            onClick={() =>
              dashboardContext && dashboardContext.toggleTheme("dark")
            }
          />
        )}
      </RFlex>
    </header>
  );
};

export default RNavbar;
