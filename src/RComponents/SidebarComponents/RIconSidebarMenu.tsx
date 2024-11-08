import { SidebarMenu } from "@/components/ui/sidebar";
import { SidebarItemType } from "@/constants/constant";
import RIconSideBarMenuItem from "@/RComponents/SidebarComponents/RIconSideBarMenuItem";
import { SidebarMenuProps } from "@/types/index.type";
import { renderSidebarItem } from "@/utils/renderSidebarItem";

const RIconSidebarMenu = ({ title, items, type }: SidebarMenuProps) => {
  console.log("icon menu items", items);
  return (
    <SidebarMenu>
      {items.map((item) => (
        <RIconSideBarMenuItem
          title={item.title}
          Icon={item.Icon}
          type={SidebarItemType.ICON_ITEM}
          items={item.items}
        />
      ))}
    </SidebarMenu>
  );
};

export default RIconSidebarMenu;
