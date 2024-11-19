import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { RTabsProps } from "@/types/index.type";
import { useTranslation } from "react-i18next";

const RTabs = ({
  defaultValue = "",
  tabs = [],
  className = "",
  activeTab,
  setActiveTab,
  innerContent = false,
  listClassName,
  triggerClassName,
  contentClassName,
}: RTabsProps) => {
  const { t } = useTranslation();
  return (
    <Tabs
      id="tabs"
      defaultValue={defaultValue}
      className={className}
      value={activeTab}
    >
      <TabsList
        id="tabs-list"
        className={cn(
          "bg-transparent border-b-2 rounded-sm border-accent",
          listClassName
        )}
      >
        {tabs.map((tab) => (
          <TabsTrigger
            id="tab-trigger"
            onClick={() => setActiveTab(tab.value)}
            value={tab.value}
            className={cn(
              "data-[state=active]:bg-transparent data-[state=active]:shadow-none",
              triggerClassName
            )}
            disabled={tab.disabled}
          >
            {t(tab.title)}
          </TabsTrigger>
        ))}
      </TabsList>
      {innerContent &&
        tabs.map((tab) => (
          <TabsContent
            id="tabs-content"
            className={contentClassName}
            value={tab.value}
          >
            {tab.content}
          </TabsContent>
        ))}
    </Tabs>
  );
};

export default RTabs;