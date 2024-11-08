import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import RDropdown from "@/RComponents/RDropDown";
import { ActionItem, SidebarItemProps } from "@/types/index.type";
import { Folder, Forward, MoreHorizontal, Trash2 } from "lucide-react";

const RNormalSidebarItem = ({
  items,
  Icon,
  title,
  type,
  actions,
}: SidebarItemProps) => {
  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton asChild>
        <a href={"#"}>
          {Icon && <Icon />}
          <span>{title}</span>
        </a>
      </SidebarMenuButton>
      {actions?.length && (
        <RDropdown
          triggerComponent={
            <SidebarMenuAction showOnHover>
              <MoreHorizontal />
              <span className="sr-only">More</span>
            </SidebarMenuAction>
          }
          actions={actions}
        />
      )}
    </SidebarMenuItem>
  );
};

export default RNormalSidebarItem;
