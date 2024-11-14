import {
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { SidebarSubMenuItemProps } from "@/types/index.type";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { t } from "i18next";
const RSubMenuSidebarItem = ({
  title,
  Icon,
  path,
  childPaths,
}: SidebarSubMenuItemProps) => {
  const location = useLocation();

  const childPathActive =
    childPaths?.some((childPath) => location.pathname.includes(childPath)) ??
    false;
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
            <span>{t(title)}</span>
          </SidebarMenuSubButton>
        </NavLink>
      ) : (
        <SidebarMenuSubButton className="cursor-pointer">
          {Icon && <Icon />}
          <span>{t(title)}</span>
        </SidebarMenuSubButton>
      )}
      {Icon && <Icon />}
    </SidebarMenuSubItem>
  );
};

export default RSubMenuSidebarItem;
