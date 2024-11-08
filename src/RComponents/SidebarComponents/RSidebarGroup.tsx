import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { mapSidebarItemTypeToComponent } from "@/constants/constant";
import { SidebarGroupProps } from "@/types/index.type";
import { renderSidebarItem } from "@/utils/renderSidebarItem";

const RSidebarGroup = ({ title, items, Icon, type }: SidebarGroupProps) => {
  console.log(title);
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      {items.map((item) => renderSidebarItem(item))}
    </SidebarGroup>
  );
};

export default RSidebarGroup;
