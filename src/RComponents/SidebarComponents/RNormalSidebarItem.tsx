import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import RDropdown from "@/RComponents/RDropDown";
import { SidebarItemProps } from "@/types/index.type";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

const RNormalSidebarItem = ({
  Icon,
  title,
  path,
  actions,
  childPaths,
}: SidebarItemProps) => {
  const location = useLocation();

  const [isActive, setIsActive] = useState<boolean>(false);
  const { t } = useTranslation();

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
            <span>{t(title)}</span>
          </SidebarMenuButton>
        </NavLink>
      ) : (
        <SidebarMenuButton className="cursor-pointer" isActive={isActive}>
          {Icon && <Icon />}
          <span>{t(title)}</span>
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
