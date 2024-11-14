import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarItemProps } from "@/types/index.type";
import { renderSidebarItem } from "@/utils/renderSidebarItem";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {t} from "i18next"
const RCollapseSidebarItem = ({
  items,
  title,
  Icon,
  path,
  childPaths,
}: SidebarItemProps) => {
  const location = useLocation();
  const childPathActive =
    childPaths?.some((childPath) => location.pathname.includes(childPath)) ??
    false;
  const [isActive, setIsActive] = useState<boolean>(childPathActive);
  const navigate = useNavigate();
  console.log("logggg", location.pathname);
  return (
    <AccordionItem
      id="accordion item"
      key={title}
      value={title}
      hasBorder={false}
    >
      <SidebarMenuItem>
        <AccordionTrigger
          id="trigger"
          className="p-0 font-normal hover:no-underline"
        >
          {path ? (
            <SidebarMenuButton
              className="cursor-pointer"
              isActive={childPathActive}
              onClick={() => navigate(path, { viewTransition: true })}
            >
              {Icon && <Icon />}
              <span>{t(title)}</span>
            </SidebarMenuButton>
          ) : (
            <SidebarMenuButton className="cursor-pointer" isActive={isActive}>
              {Icon && <Icon />}
              <span>{t(title)}</span>
            </SidebarMenuButton>
          )}
        </AccordionTrigger>
        <AccordionContent className="pb-0" containerClassName="p-1">
          {items?.map((item) => {
            return renderSidebarItem(item);
          })}
        </AccordionContent>
      </SidebarMenuItem>
    </AccordionItem>
  );
};

export default RCollapseSidebarItem;
