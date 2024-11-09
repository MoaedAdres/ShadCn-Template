import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import RDropdown from "@/RComponents/RDropDown";
import { SidebarItemProps } from "@/types/index.type";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RNormalSidebarItem = ({
  Icon,
  title,
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
