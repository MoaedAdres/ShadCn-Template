import { SidebarMenu } from "@/components/ui/sidebar";
import RNormalSidebarItem from "@/RComponents/SidebarComponents/RNormalSidebarItem";
import { SidebarMenuProps } from "@/types/index.type";
import { renderSidebarItem } from "@/utils/renderSidebarItem";

const RNormalSidebarMenu = ({ title, items, type }: SidebarMenuProps) => {
  return (
    <SidebarMenu>{items.map((item) => renderSidebarItem(item))}</SidebarMenu>
  );
};

export default RNormalSidebarMenu;
