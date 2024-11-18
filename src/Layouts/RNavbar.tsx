import { LangElement } from "@/assets/translations/languages";
import { SidebarTrigger } from "@/components/ui/sidebar";
import RBreadcrumb from "@/RComponents/RBreadcrumb";
import RCheckDropdown from "@/RComponents/RCheckDropdown";
import RFlex from "@/RComponents/RFlex";
import { ActionItem, CheckActionItem } from "@/types/index.type";
import { DashboardContext } from "@/Views/Dashboard/Dashboard";
import { Separator } from "@radix-ui/react-separator";
import {
  Brush,
  BrushIcon,
  Globe,
  Languages,
  Moon,
  Palette,
  Sun,
} from "lucide-react";
import { act, useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ukFlag from "@/assets/icons/uk-flag.png";
import denmarkFlag from "@/assets/icons/denmark-flag.webp";

const RNavbar = ({}) => {
  const dashboardContext = useContext(DashboardContext);
  const { i18n } = useTranslation();

  console.log("lang",dashboardContext.activeLanguage)
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
  console.log("theme", dashboardContext.theme);
  const [avaliableThemes, setAvaliableThemes] = useState<{
    [key: string]: CheckActionItem;
  }>({
    "1": {
      name: "light",
      checked: dashboardContext.theme === "",
      onCheckedChange: (checked) =>
        checked ? "" : dashboardContext.toggleTheme(""),
    },
    "2": {
      name: "dark",
      checked: dashboardContext.theme === "dark",
      onCheckedChange: (checked) =>
        checked ? "" : dashboardContext.toggleTheme("dark"),
    },
    "3": {
      name: "green 1",
      checked: dashboardContext.theme === "green 1",
      onCheckedChange: (checked) =>
        checked ? "" : dashboardContext.toggleTheme("green 1"),
    },
    "4": {
      name: "green 2",
      checked: dashboardContext.theme === "green 2",
      onCheckedChange: (checked) =>
        checked ? "" : dashboardContext.toggleTheme("green 2"),
    },
    "5": {
      name: "green 3",
      checked: dashboardContext.theme === "green 3",
      onCheckedChange: (checked) =>
        checked ? "" : dashboardContext.toggleTheme("green 3"),
    },
    "6": {
      name: "warm-pink",
      checked: dashboardContext.theme === "warm-pink",
      onCheckedChange: (checked) =>
        checked ? "" : dashboardContext.toggleTheme("warm-pink"),
    },
    "7": {
      name: "blue-green",
      checked: dashboardContext.theme === "blue-green",
      onCheckedChange: (checked) =>
        checked ? "" : dashboardContext.toggleTheme("blue-green"),
    },
  });
  const [languages, setLanguages] = useState(languageObject);

  return (
    <header
      id="header"
      className="border-b-[1px] border-muted sticky top-0 bg-background flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 z-20"
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
            <Globe className="w-4 h-4 hover:text-muted-foreground" />
          }
          // itemClassName="pl-6"
          KeepActiveItemChecked
          side="bottom"
          align="center"
          contentClassName="min-w-fit w-max"
          actions={languages}
          setActions={setLanguages}
        />
        <RCheckDropdown
          triggerComponent={
            <Palette className="w-4 h-4 hover:text-muted-foreground" />
          }
          itemClassName="pl-6"
          KeepActiveItemChecked
          side="bottom"
          align="center"
          contentClassName="min-w-fit w-max"
          actions={avaliableThemes}
          setActions={setAvaliableThemes}
        />
        {/* {dashboardContext?.theme === "dark" ? (
          <Sun
            className="w-4 h-4 hover:text-muted-foreground cursor-pointer"
            onClick={() => dashboardContext && dashboardContext.toggleTheme("")}
          />
        ) : (
          <Moon
            className="w-4 h-4 hover:text-muted-foreground cursor-pointer"
            onClick={() =>
              dashboardContext && dashboardContext.toggleTheme("dark")
            }
          />
        )} */}
      </RFlex>
    </header>
  );
};

export default RNavbar;
