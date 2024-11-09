import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import RDropdown from "@/RComponents/RDropDown";
import { ActionItem, SidebarItemProps } from "@/types/index.type";
import { Folder, Forward, MoreHorizontal, Trash2 } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RNormalSidebarItem = ({
  items,
  Icon,
  title,
  type,
  path,
  actions,
}: SidebarItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <SidebarMenuItem key={title}>
      {path ? (
        <NavLink
          to={path}
          className={({ isActive }) => {
            setIsActive(isActive);
            return "";
          }}
        >
          <SidebarMenuButton className="cursor-pointer" isActive={isActive}>
            {Icon && <Icon />}
            <span>{title}</span>
          </SidebarMenuButton>
        </NavLink>
      ) : (
        <SidebarMenuButton className="cursor-pointer" isActive={isActive}>
          {Icon && <Icon />}
          <span>{title}</span>
        </SidebarMenuButton>
      )}
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
