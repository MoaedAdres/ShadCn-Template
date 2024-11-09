import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { SidebarGroupProps } from "@/types/index.type";
import { renderSidebarItem } from "@/utils/renderSidebarItem";
import { useTranslation } from "react-i18next";

const RSidebarGroup = ({ title, items, Icon }: SidebarGroupProps) => {
  const { t } = useTranslation();

  console.log(title);
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        {Icon && <Icon />}
        {t(title)}
      </SidebarGroupLabel>
      {items.map((item) => renderSidebarItem(item))}
    </SidebarGroup>
  );
};

export default RSidebarGroup;
