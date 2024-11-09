import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { SidebarSubMenuItemProps } from "@/types/index.type";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RSubMenuSidebarItem = ({
  title,
  Icon,
  path,
}: SidebarSubMenuItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  console.log("isActiveeee", isActive);
  return (
    <SidebarMenuSubItem key={title}>
      {path ? (
        <NavLink
          to={path}
          className={({ isActive }) => {
            setIsActive(isActive);
            return "";
          }}
        >
          <SidebarMenuSubButton className="cursor-pointer" isActive={isActive}>
            {Icon && <Icon />}
            <span>{title}</span>
          </SidebarMenuSubButton>
        </NavLink>
      ) : (
        <SidebarMenuSubButton className="cursor-pointer">
          {Icon && <Icon />}
          <span>{title}</span>
        </SidebarMenuSubButton>
      )}
      {Icon && <Icon />}
    </SidebarMenuSubItem>
  );
};

export default RSubMenuSidebarItem;
