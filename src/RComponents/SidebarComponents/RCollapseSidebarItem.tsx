import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarItemProps } from "@/types/index.type";
import { renderSidebarItem } from "@/utils/renderSidebarItem";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RCollapseSidebarItem = ({
  items,
  title,
  Icon,
  path,
}: SidebarItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

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
        </AccordionTrigger>
        <AccordionContent>
          {items?.map((item) => {
            return renderSidebarItem(item);
          })}
        </AccordionContent>
      </SidebarMenuItem>
    </AccordionItem>
  );
};

export default RCollapseSidebarItem;
