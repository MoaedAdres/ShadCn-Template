import { SidebarMenuSub } from "@/components/ui/sidebar";
import RSubMenuSidebarItem from "@/RComponents/SidebarComponents/RSubMenuSidebarItem";
import { SidebarSubMenuProps } from "@/types/index.type";
import { renderSidebarItem } from "@/utils/renderSidebarItem";
import { Settings } from "lucide-react";

const RSubMenuSidebar = ({ items, type, title }: SidebarSubMenuProps) => {
  return (
    <SidebarMenuSub>
      {items?.map((item) => renderSidebarItem(item))}
    </SidebarMenuSub>
  );
};

export default RSubMenuSidebar;
